import { GraphLink, GraphNode, GraphState } from "../graphData";

export interface GraphResponse {
  nodes: GraphNode[];
  links: GraphLink[];
}

export function loadNodes() {
  let dataset: GraphState = { nodes: [], links: [] };

  async function load(inn: string, ogrn?: string) {
    return await fetch(
      `https://irbis.dev.a-inform.com/ru/base/-/services/report/132999cd-a6fd-4538-a6a3-28f4891f937f/people-orgs.json?event=graph-node&inn=${inn}${
        ogrn ? "&ogrn=" + ogrn : ""
      }`
    )
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        const d = e.response as GraphResponse;
        return parseDataSet(d);
      });
  }

  function parseDataSet(d: GraphResponse): GraphState {
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

  function getDataset() {
    return dataset;
  }

  return {
    getDataset,
    load,
  };
}
