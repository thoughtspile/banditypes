import { set, number } from "banditypes";

export const Struct = set(number());

export const data = new Set([1, "b", 3]);

export const failures = [
  {
    value: "b",
    type: "number",
    refinement: undefined,
    path: ["b"],
    branch: [data, "b"],
  },
];
