import { array, unknown } from "#lib";

export const Struct = array(unknown());

export const data = "invalid";

export const failures = [
  {
    value: "invalid",
    type: "array",
    refinement: undefined,
    path: [],
    branch: [data],
  },
];
