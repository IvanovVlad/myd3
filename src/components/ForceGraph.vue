<template>
  <div>
    <div id="#graph">
      <canvas
        :width="graphWidth"
        :height="graphHeight"
        ref="canvasElement"
      ></canvas>
    </div>
    <div>selected: {{ selectedNode }}</div>
    <pre>
      {{ JSON.stringify(dataset, undefined, 2) }}
    </pre>
  </div>
</template>

<script lang="ts" setup>
import * as d3 from "d3";
import { D3DragEvent, D3ZoomEvent } from "d3";
import { computed, ComputedRef, onMounted, Ref, ref } from "vue";
import { GraphNodeWrapper, GraphState } from "../graphData";
import { doubleClick } from "./draw";
import { debounce, wrapText } from "./tools";
import { getIcon, GraphIcons, isFounder } from "./icons";
import { loadNodes } from "./fetch";
import employee from "../chart/icon_employee.svg";
import employeeDisabled from "../chart/icon_employee_disabled.svg";
import employeeEx from "../chart/icon_employee_ex.svg";
import employeeExDisabled from "../chart/icon_employee_ex_disabled.svg";
import founder from "../chart/icon_founder.svg";
import founderDisabled from "../chart/icon_founder_disabled.svg";
import founderEx from "../chart/icon_founder_ex.svg";
import founderExDisabled from "../chart/icon_founder_ex_disabled.svg";
import mainOrganisation from "../chart/icon_main_organization.svg";
import organisation from "../chart/icon_organisation.svg";
import organisationDead from "../chart/icon_organisation_dead.svg";

function createImg(s: string) {
  const img = new Image();
  img.src = s;
  return img;
}

let icons: Record<GraphIcons, HTMLImageElement> = {
  employee: (() => createImg(employee))(),
  employeeDisabled: (() => createImg(employeeDisabled))(),
  employeeEx: (() => createImg(employeeEx))(),
  employeeExDisabled: (() => createImg(employeeExDisabled))(),
  founder: (() => createImg(founder))(),
  founderDisabled: (() => createImg(founderDisabled))(),
  founderEx: (() => createImg(founderEx))(),
  founderExDisabled: (() => createImg(founderExDisabled))(),
  mainOrganisation: (() => createImg(mainOrganisation))(),
  organisation: (() => createImg(organisation))(),
  organisationDead: (() => createImg(organisationDead))(),
};

const radius = 25,
  graphHeight = 500,
  graphWidth = 1000;

const doubleClickHandler = doubleClick(async (n: GraphNodeWrapper) => {
  if (n.payload.inn) {
    let ogrn;
    if (n.payload.type === "organisation") {
      ogrn = n.payload.ogrn;
    }
    await load(dataset, n.payload?.inn, ogrn).then((ds) => {
      dataset = ds;
      initGraph();
      simulation.alpha(0.75).restart();
    });
  }
});

const simulation = d3
  .forceSimulation()
  .force("center", d3.forceCenter(graphWidth / 2, graphHeight / 2))
  // .force("x", d3.forceX(graphWidth / 2).strength(0.1))
  // .force("y", d3.forceY(graphHeight / 2).strength(0.1))
  .force("charge", d3.forceManyBody().strength(-1000))
  .force(
    "link",
    d3
      .forceLink()
      .distance(100)
      .iterations(5)
      .id(function (d: any) {
        return d.payload.id;
      })
  )
  .force("collide", d3.forceCollide(10));

let selectedNode: Ref<GraphNodeWrapper | null> = ref(null),
  dragging = false,
  canvasElement: Ref<HTMLCanvasElement | null> = ref(null),
  context: CanvasRenderingContext2D,
  transform = d3.zoomIdentity,
  dataset: GraphState = { nodes: [], links: [] };

const queryInn: ComputedRef<string> = computed(
  () => dataset.nodes[0]?.payload?.inn || ""
);

function initDrag(tempData: any) {
  const dragHandler = d3
    .drag()
    .subject(dragSubject)
    .on("start", dragStarted)
    .on("drag", dragged)
    .on("end", dragEnded);

  dragHandler(d3.select(canvasElement.value as Element));
  d3.select(canvasElement.value as Element).on(
    "mousemove",
    debounce(
      (e: any) => {
        if (dragging) {
          return;
        }
        const node = locateNode(e as DragEvent);
        if (canvasElement.value?.style) {
          if (node) {
            selectedNode.value = node;
            canvasElement.value.style.cursor = "pointer";
          } else {
            selectedNode.value = null;
            canvasElement.value.style.cursor = "";
          }
        }
      },
      10,
      false
    )
  );

  function dragSubject(e: DragEvent) {
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

  function locateNode(e: DragEvent) {
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
        return node;
      }
    }
  }

  function dragStarted(e: D3DragEvent<any, any, any>) {
    doubleClickHandler.handleClick(e.subject, new Date());
    dragging = true;
    selectedNode.value = e.subject;

    if (!e.active) simulation.alphaTarget(0.5).restart();
    e.subject.fx = transform.invertX(e.x);
    e.subject.fy = transform.invertY(e.y);
  }

  function dragged(e: D3DragEvent<any, any, any>) {
    e.subject.fx = transform.invertX(e.x);
    e.subject.fy = transform.invertY(e.y);
  }

  function dragEnded(e: D3DragEvent<any, any, any>) {
    dragging = false;
    selectedNode.value = null;

    if (!e.active) simulation.alphaTarget(0);
    e.subject.fx = null;
    e.subject.fy = null;
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

  // Draw links
  for (const d of tempData.links) {
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
    let roleIndex = 0;
    for (const i of indexes) {
      // Calculate the slope of the line
      const alpha = Math.atan(dy / dx),
        // Deltas for x and y Axes (for the control points)
        deltaX = 5,
        // curvature
        deltaY = 14 * (i - 1),
        // Find new coordinates after rotation
        x1 = deltaX * Math.cos(alpha) - -deltaY * Math.sin(alpha),
        y1 = deltaX * Math.sin(alpha) + -deltaY * Math.cos(alpha),
        x2 = -deltaX * Math.cos(alpha) - -deltaY * Math.sin(alpha),
        y2 = -deltaX * Math.sin(alpha) + -deltaY * Math.cos(alpha),
        midpX = (x1 + d.source.x + x2 + d.target.x) / 2,
        midpY = (y1 + d.source.y + y2 + d.target.y) / 2;

      const role = d.roles[roleIndex];
      if (isFounder(role?.name)) {
        context.strokeStyle = "red";
      } else {
        context.strokeStyle = "black";
      }

      if (role?.archived) {
        if (typeof context.setLineDash === "undefined") {
          //@ts-ignore
          context.mozDash = [4];
        } else {
          //Chrome
          context.setLineDash([4]);
        }
      } else {
        context.lineDashOffset = 100;
      }

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

      roleIndex++;
    }
  }

  // Draw the nodes
  for (const d of tempData.nodes) {
    if (!d.x || !d.y) continue;
    const size = radius * 2;
    const icon = icons[getIcon(d.payload, queryInn.value)];
    if (icon) {
      context.drawImage(icon, d.x - size / 2, d.y - size / 2, size, size);
    }
  }

  // Draw the labels
  for (const d of tempData.nodes) {
    if (!d.x || !d.y) continue;
    context.textAlign = "center";
    context.font = "10px Arial";
    const fs = context.fillStyle;
    context.fillStyle = "#404040";
    const wt = wrapText(context, d.payload.name, 40);
    for (let i = 0; i < wt.length; i++) {
      const yOffset = radius + i * 12 + 10;
      context.fillText(wt[i], d.x, d.y + yOffset);
    }
    context.fillStyle = fs;
  }

  context.restore();
}

function initGraph() {
  simulation
    .nodes(dataset.nodes)
    .on("tick", () => simulationUpdate(dataset))
    .on("end", () => {
      dataset.nodes = dataset.nodes.map((n) => {
        n.fx = n.x;
        n.fy = n.y;
        return n;
      });
    });
  simulation.force<any>("link").links(dataset.links);

  initDrag(dataset);
  initZoom();
}

const { load } = loadNodes();

onMounted(async () => {
  // dataset = graphIrbis;
  await load(dataset, "1832051249", "1061832016630").then((ds) => {
    dataset = ds;
  });

  if (!canvasElement.value) return;
  context = canvasElement.value.getContext("2d") as CanvasRenderingContext2D;
  if (!context) return;
  context.lineWidth = 0.5;
  context.imageSmoothingEnabled = false;
  initGraph();
});
</script>

<style>
canvas {
  border: 1px solid;
  cursor: move;
}
</style>
