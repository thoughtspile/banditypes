import { objectLoose, string, number, optional } from "#lib";

export const Struct = objectLoose({
  name: string().or(optional()),
  age: number(),
});

export const data = {
  name: "Jill",
  age: 42,
};

export const output = {
  name: "Jill",
  age: 42,
};
