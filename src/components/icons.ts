import {
  GraphNode,
  GraphNodeOrganisation,
  GraphNodePerson,
} from "../graphData";

export type GraphIcons =
  | "employee"
  | "employeeDisabled"
  | "employeeEx"
  | "employeeExDisabled"
  | "founder"
  | "founderDisabled"
  | "founderEx"
  | "founderExDisabled"
  | "mainOrganisation"
  | "organisation"
  | "organisationDead";

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
