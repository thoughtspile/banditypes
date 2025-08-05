import { objectLoose, string, number } from "#lib";

export const Struct = objectLoose({
  name: string(),
  age: number(),
});

export const data = {
  name: "john",
  age: 42,
  extra: "pie",
};

export const output = data;
