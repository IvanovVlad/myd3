<template>
  <div id="#graph">
    <canvas width="500" height="500"></canvas>
  </div>
</template>

<script lang="ts" setup>
import * as d3 from "d3";
import { datasetCommon, datasetDemo } from "../../irbisData";
import { D3DragEvent, D3ZoomEvent } from "d3";
import { onMounted } from "vue";

const radius = 5,
  defaultNodeCol = "black",
  highlightCol = "red",
  graphHeight = 500,
  graphWidth = 500;

const simulation = d3
  .forceSimulation()
  .force("center", d3.forceCenter(graphWidth / 2, graphHeight / 2))
  // .force("x", d3.forceX(graphWidth / 2).strength(0.1))
  // .force("y", d3.forceY(graphHeight / 2).strength(0.1))
  .force("charge", d3.forceManyBody().strength(-100))
  .force(
    "link",
    d3
      .forceLink()
      .strength(1)
      .id(function (d: any) {
        return d.id; // todo replace any
      })
  )
  .alphaTarget(0)
  .alphaDecay(0.05);

onMounted(() => {
  const graphCanvas = d3.select("canvas").node() as HTMLCanvasElement;
  const context = graphCanvas.getContext("2d");

  let transform = d3.zoomIdentity;

  // initGraph(datasetCommon);
  initGraph(datasetDemo);

  function initGraph(tempData: any) {
    function zoomed(e: D3ZoomEvent<any, any>) {
      transform = e.transform;
      simulationUpdate();
    }

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
      if (!e.active) simulation.alphaTarget(0.3).restart();
      e.subject.fx = transform.invertX(e.x);
      e.subject.fy = transform.invertY(e.y);
    }

    function dragged(e: D3DragEvent<any, any, any>) {
      e.subject.fx = transform.invertX(e.x);
      e.subject.fy = transform.invertY(e.y);
    }

    function dragEnded(e: D3DragEvent<any, any, any>) {
      if (!e.active) simulation.alphaTarget(0);
      e.subject.fx = null;
      e.subject.fy = null;
    }

    function simulationUpdate() {
      if (!context) return;
      context.save();

      context.clearRect(0, 0, graphWidth, graphHeight);
      context.translate(transform.x, transform.y);
      context.scale(transform.k, transform.k);

      tempData.edges.forEach(function (d: {
        source: { x: number; y: number };
        target: { x: number; y: number };
      }) {
        const midpointX = (d.source.x + d.target.x) / 2;
        const midpointY = (d.source.y + d.target.y) / 2;
        context.beginPath();
        context.moveTo(d.source.x, d.source.y);
        // context.lineTo(midpointX, midpointY);
        context.lineTo(d.target.x, d.target.y);
        // context.quadraticCurveTo(midpointX, midpointY, d.target.x, d.target.y);
        context.stroke();
      });

      // Draw the nodes
      tempData.nodes.forEach(function (d: { x: number; y: number; col: any }) {
        context.beginPath();
        context.arc(d.x, d.y, radius, 0, 2 * Math.PI, true);
        context.fillStyle = d.col ? highlightCol : defaultNodeCol;
        context.fill();
      });

      context.restore();
    }

    const dragHandler = d3
      .drag()
      .subject(dragSubject)
      .on("start", dragStarted)
      .on("drag", dragged)
      .on("end", dragEnded);

    const zoomHandler = d3
      .zoom()
      .scaleExtent([1 / 10, 8])
      .on("zoom", zoomed);

    dragHandler(d3.select("canvas"));
    zoomHandler(d3.select("canvas"));
    simulation.nodes(tempData.nodes).on("tick", simulationUpdate);
    simulation.force<any>("link").links(tempData.edges); // todo remove any
  }
});
</script>

<style>
canvas {
  border: 1px solid;
}
</style>
