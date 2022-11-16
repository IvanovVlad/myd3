import { GraphNodeWrapper } from "../graphData";

const icons = {
  employee: "./src/chart/icon_employee.svg",
  employeeDisabled: "./src/chart/icon_employee_disabled.svg",
  employeeEx: "./src/chart/icon_employee_ex.svg",
  employeeExDisabled: "./src/chart/icon_employee_ex_disabled.svg",
  founder: "./src/chart/icon_founder.svg",
  founderDisabled: "./src/chart/icon_founder_disabled.svg",
  founderEx: "./src/chart/icon_founder_ex.svg",
  founderExDisabled: "./src/chart/icon_founder_ex_disabled.svg",
  mainOrganisation: "./src/chart/icon_main_organization.svg",
  organisation: "./src/chart/icon_organisation.svg",
  organisationDead: "./src/chart/icon_organisation_dead.svg",
};

export type GraphIcons = keyof typeof icons;

export function loadImages(result: Record<GraphIcons, HTMLImageElement>) {
  for (const key in icons) {
    const img = new Image();
    img.src = icons[key as GraphIcons];
    img.onload = () => {
      result[key as GraphIcons] = img;
    };
  }
}

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
