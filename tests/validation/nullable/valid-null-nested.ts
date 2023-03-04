import { objectLoose, string, number, nullable } from "../../../src/index.js";

export const Struct = objectLoose({
  name: string().or(nullable()),
  age: number(),
});

export const data = {
  name: null,
  age: 42,
};

export const output = {
  name: null,
  age: 42,
};
