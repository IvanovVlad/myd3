import {
  GraphNode,
  GraphNodeOrganisation,
  GraphNodePerson,
} from "../graphData";

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

export function loadImages(
  result: Record<GraphIcons, HTMLImageElement | undefined>
) {
  for (const key in icons) {
    const img = new Image();
    img.src = icons[key as GraphIcons];
    img.onload = () => {
      result[key as GraphIcons] = img;
    };
  }
}

export const getIcon = (n: GraphNode, qInn?: string): GraphIcons => {
  switch (n.type) {
    case "organisation":
      return getIconOrganisation(n, qInn);
    case "person":
      return getIconPerson(n);
  }
};
const getIconOrganisation = (
  n: GraphNodeOrganisation,
  qInn?: string
): GraphIcons => {
  return !!n.death
    ? "organisationDead"
    : n.inn === qInn
    ? "mainOrganisation"
    : "organisation";
};

const getIconPerson = (n: GraphNodePerson): GraphIcons => {
  const disabled = !n.inn;
  return disabled ? "founderDisabled" : "founder";
};

export const isFounder = (roleName: string) => /учредитель/i.test(roleName);

// isFounder(role.name) ? css.linkRed : css.link,
// role.archived && css.linkDashed,
