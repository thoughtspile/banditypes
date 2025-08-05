import { objectLoose, string, number } from "#lib";

const A = objectLoose({ a: string() });
const B = objectLoose({ b: number() });

export const Struct = A.or(B);

export const data = {
  b: "invalid",
};

export const failures = [
  {
    value: { b: "invalid" },
    type: "union",
    refinement: undefined,
    path: [],
    branch: [data],
  },
  {
    value: undefined,
    type: "string",
    refinement: undefined,
    path: ["a"],
    branch: [data, undefined],
  },
  {
    value: "invalid",
    type: "number",
    refinement: undefined,
    path: ["b"],
    branch: [data, data.b],
  },
];
