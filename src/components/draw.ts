import { GraphNodeWrapper } from "../graphData";

export function doubleClick(handler: (n: GraphNodeWrapper) => void) {
  let previousNode: GraphNodeWrapper | null = null;
  let previousTime: Date | null = null;

  const doubleClickHandler: (n: GraphNodeWrapper) => void = handler;

  function handleClick(node: GraphNodeWrapper, time: Date) {
    if (!graphNodeEquals(previousNode, node) || !previousTime) {
      previousNode = node;
      previousTime = time;
      return;
    }

    const dt = time.getTime() - previousTime.getTime();
    const maxDelay = 2000;

    if (graphNodeEquals(previousNode, node) && dt < maxDelay) {
      doubleClickHandler(node);
      previousNode = null;
      previousTime = null;
    }
  }

  return { handleClick };
}

export function graphNodeEquals(
  n1: GraphNodeWrapper | null,
  n2: GraphNodeWrapper | null
) {
  if (!n1 || !n2) return false;
  return n1.payload.id === n2.payload.id;
}
