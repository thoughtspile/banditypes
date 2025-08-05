import { map, string, number } from "#lib";

export const Struct = map(string(), number());

export const data = "invalid";

export const failures = [
  {
    value: "invalid",
    type: "map",
    refinement: undefined,
    path: [],
    branch: [data],
  },
];
