import { record, string, number } from "#lib";

export const Struct = record(number());

export const data = {
  a: "a",
  b: "b",
};

export const failures = [
  {
    value: "a",
    type: "number",
    refinement: undefined,
    path: ["a"],
    branch: [data, data.a],
  },
  {
    value: "b",
    type: "number",
    refinement: undefined,
    path: ["b"],
    branch: [data, data.b],
  },
];
