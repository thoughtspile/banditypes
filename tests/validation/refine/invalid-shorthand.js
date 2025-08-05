import { fail, number } from "#lib";

export const Struct = number().map((v) => (v > 0 ? v : fail()));

export const data = -1;

export const failures = [
  {
    value: -1,
    type: "number",
    refinement: "positive",
    path: [],
    branch: [data],
  },
];
