import { objectLoose, string, number } from "#lib";

export const Struct = objectLoose({
  name: string(),
  age: number(),
});

export const data = "invalid";

export const failures = [
  {
    value: "invalid",
    type: "type",
    refinement: undefined,
    path: [],
    branch: [data],
  },
];
