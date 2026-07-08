import { number, optional } from "banditypes";

export const Struct = number().or(optional());

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
