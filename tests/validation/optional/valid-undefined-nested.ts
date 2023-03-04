import { objectLoose, string, number, optional } from "../../../src/index.js";

export const Struct = objectLoose({
  name: string().or(optional()),
  age: number(),
});

export const data = {
  age: 42,
};

export const output = {
  age: 42,
};
