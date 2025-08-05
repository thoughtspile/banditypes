import { object, string, number } from "#lib";

export const Struct = object({
  name: string(),
  age: number(),
});

export const data = {
  name: "john",
  age: 42,
};

export const output = {
  name: "john",
  age: 42,
};
