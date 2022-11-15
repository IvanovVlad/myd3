<template>
  <div id="#graph">
    <canvas
      :width="graphWidth"
      :height="graphHeight"
      ref="canvasElement"
    ></canvas>
  </div>
</template>

<script lang="ts" setup>
import * as d3 from "d3";
import { D3DragEvent, D3ZoomEvent, SimulationLinkDatum } from "d3";
import { onBeforeMount, onMounted, Ref, ref } from "vue";
import { graphIrbis, GraphNodeWrapper, GraphState } from "../graphData";
import { GraphIcons, loadImages } from "./draw";

// todo fix typescript errors
let icons: Record<GraphIcons, HTMLImageElement> | Object = {};

const radius = 15,
  graphHeight = 500,
  graphWidth = 1000;

const simulation = d3
  .forceSimulation()
  .force("center", d3.forceCenter(graphWidth / 2, graphHeight / 2))
  .force("x", d3.forceX(graphWidth / 2).strength(0.1))
  .force("y", d3.forceY(graphHeight / 2).strength(0.1))
  .force("charge", d3.forceManyBody().strength(-1000))
  .force(
    "link",
    d3
      .forceLink()
      .distance(100)
      .strength(1)
      .id(function (d: GraphNodeWrapper) {
        return d.payload.id; // todo replace any
      })
  )
  .alphaTarget(0)
  .alphaDecay(0.05);

let selectedNode: any = null;
let canvasElement: Ref<HTMLCanvasElement | null> = ref(null);
let context: CanvasRenderingContext2D | null = null;
let transform = d3.zoomIdentity;
const dataset: GraphState = graphIrbis;

function initDrag(tempData: any) {
  const dragHandler = d3
    .drag()
    .subject(dragSubject)
    .on("start", dragStarted)
    .on("drag", dragged)
    .on("end", dragEnded);

  dragHandler(d3.select(canvasElement.value as Element));

  function dragSubject(e: D3DragEvent<any, any, any>) {
    let i,
      x = transform.invertX(e.x),
      y = transform.invertY(e.y),
      dx,
      dy;
    for (i = tempData.nodes.length - 1; i >= 0; --i) {
      const node = tempData.nodes[i];
      if (!node || !node.x || !node.y) return node;
      dx = x - node.x;
      dy = y - node.y;

      if (dx * dx + dy * dy < radius * radius + 10) {
        node.x = transform.applyX(node.x);
        node.y = transform.applyY(node.y);

        return node;
      }
    }
  }

  function dragStarted(e: D3DragEvent<any, any, any>) {
    if (selectedNode) {
      if (
        selectedNode.payload.id === e.subject.payload.id &&
        dataset.nodes[selectedNode.index].fx
      ) {
        dataset.nodes[selectedNode.index].fx = null;
        dataset.nodes[selectedNode.index].fy = null;
        selectedNode = null;
        return;
      }

      dataset.nodes[selectedNode.index].fx = null;
      dataset.nodes[selectedNode.index].fy = null;
    }
    selectedNode = e.subject;
    if (!e.active) simulation.alphaTarget(0.5).restart();
    e.subject.fx = transform.invertX(e.x);
    e.subject.fy = transform.invertY(e.y);
  }

  function dragged(e: D3DragEvent<any, any, any>) {
    e.subject.fx = transform.invertX(e.x);
    e.subject.fy = transform.invertY(e.y);
  }

  function dragEnded(e: D3DragEvent<any, any, any>) {
    // selectedNode.value = null;
    if (!e.active) simulation.alphaTarget(0);
    // e.subject.fx = null;
    // e.subject.fy = null;
  }
}

function initZoom() {
  const zoomHandler = d3
    .zoom()
    .scaleExtent([1 / 10, 8])
    .on("zoom", zoomed);

  zoomHandler(d3.select(canvasElement.value as Element));
  d3.select(canvasElement.value as Element).on("dblclick.zoom", null);

  function zoomed(e: D3ZoomEvent<any, any>) {
    transform = e.transform;
    simulationUpdate(dataset);
  }
}

function simulationUpdate(tempData: GraphState) {
  if (!context) return;
  context.save();

  context.clearRect(0, 0, graphWidth, graphHeight);
  context.translate(transform.x, transform.y);
  context.scale(transform.k, transform.k);

  const links = tempData.links as SimulationLinkDatum<any>[];

  for (const d of links) {
    const dx = d.target.x - d.source.x,
      dy = d.target.y - d.source.y;
    let indexes: number[] = [];
    if (d.roles.length + 1 === 2) {
      indexes = [-1, 1];
    } else if (d.roles.length + 1 === 3) {
      indexes = [-1, 0, 1];
    } else {
      for (let i = 0; i < d.roles.length; i++) {
        indexes.push(i);
      }
    }
    for (const i of indexes) {
      // Calculate the slope of the line
      const alpha = Math.atan(dy / dx),
        // Deltas for x and y Axes (for the control points)
        deltaX = 5,
        deltaY = 10 * (i - 1),
        // Find new coordinates after rotation
        x1 = deltaX * Math.cos(alpha) - -deltaY * Math.sin(alpha),
        y1 = deltaX * Math.sin(alpha) + -deltaY * Math.cos(alpha),
        x2 = -deltaX * Math.cos(alpha) - -deltaY * Math.sin(alpha),
        y2 = -deltaX * Math.sin(alpha) + -deltaY * Math.cos(alpha),
        midpX = (x1 + d.source.x + x2 + d.target.x) / 2,
        midpY = (y1 + d.source.y + y2 + d.target.y) / 2;

      context.beginPath();
      context.bezierCurveTo(
        d.source.x,
        d.source.y,
        midpX,
        midpY,
        d.target.x,
        d.target.y
      );
      context.stroke();
    }
  }

  function wrapText(
    context: CanvasRenderingContext2D,
    text: string,
    maxWidth: number
  ) {
    const words = text.split(" ");
    let result = [];
    let line = "";

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const testWidth = context.measureText(testLine).width;
      if (testWidth > maxWidth && n > 0) {
        result.push(testLine);
        line = "";
      } else {
        line = testLine;
      }
    }
    return result;
  }

  // Draw the nodes
  for (const d of tempData.nodes) {
    // context.beginPath();
    // context.arc(d.x, d.y, radius, 0, 2 * Math.PI, true);
    // context.fill();
    const size = radius * 2;
    if (icons["employee"]) {
      context.drawImage(icons["employee"], d.x - size / 2, d.y - size / 2, size, size);
    }
    context.textAlign = "center";
    context.font = "10px Arial";
    const fs = context.fillStyle;
    context.fillStyle = "#404040";
    const wt = wrapText(context, d.payload.name, 3);
    for (let i = 0; i < wt.length; i++) {
      context.fillText(wt[i], d.x, d.y + radius * 2 + i * 12);
    }
    context.fillStyle = fs;

  }

  context.restore();
}

function initGraph(tempData: any) {
  simulation.nodes(tempData.nodes).on("tick", () => simulationUpdate(dataset));
  simulation.force<any>("link").links(tempData.links); // todo remove any

  // todo: d3-graph redundant
  initDrag(dataset);
  initZoom();
}

onBeforeMount(() => {
  loadImages(icons);
});

onMounted(() => {
  if (!canvasElement.value) return;
  context = canvasElement.value.getContext("2d");
  if (!context) return;
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  initGraph(dataset);
});
</script>

<style>
canvas {
  border: 1px solid;
}
</style>
