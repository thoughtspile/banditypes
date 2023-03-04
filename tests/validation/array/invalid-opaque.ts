import { array, unknown } from "../../../src/index.js";

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
