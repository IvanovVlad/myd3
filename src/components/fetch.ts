import { GraphLink, GraphNode, GraphState } from "../graphData";

export interface GraphResponse {
  nodes: GraphNode[];
  links: GraphLink[];
}

export function loadNodes() {
  async function load(dataset: GraphState, inn: string, ogrn?: string) {
    ogrn = ogrn ? "&ogrn=" + ogrn : "";
    return await fetch(
      `https://ir-bis.org/ru/base/-/services/report/e89a86e4-ce4e-4ddd-9dc2-2c118c7fb98e/people-orgs.json?event=graph-node&inn=${inn}${ogrn}`
    )
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        const d = e.response as GraphResponse;
        return parseDataSet(d, dataset);
      });
  }

  function parseDataSet(d: GraphResponse, dataset: GraphState): GraphState {
    const { nodes, links } = dataset;

    let newData = false;

    const nodeSet = new Set(nodes.map((x) => x.payload.id));
    for (const node of d.nodes) {
      if (!nodeSet.has(node.id)) {
        newData = true;
        nodes.push({ payload: node });
      }
    }
    const linkSet = new Set(links.map((l) => l.source + "_" + l.target));
    for (const link of d.links) {
      if (!linkSet.has(link.source + "_" + link.target)) {
        newData = true;
        links.push(link);
      }
    }

    return { nodes, links };
  }

  return {
    load,
  };
}
