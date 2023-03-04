import { objectLoose, string, number } from "../../../src/index.js";

const A = objectLoose({ a: string() });
const B = objectLoose({ b: number() });

export const Struct = A.or(B);

export const data = {
  a: "a",
};

export const output = {
  a: "a",
};
