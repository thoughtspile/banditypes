import { number } from "#lib";

export const Struct = number();

export const data = "invalid";

export const failures = [
  {
    value: "invalid",
    type: "number",
    refinement: undefined,
    path: [],
    branch: [data],
  },
];
