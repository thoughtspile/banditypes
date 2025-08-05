import { objectLoose, string, number } from "#lib";

export const Struct = objectLoose({
  id: number(),
  person: objectLoose({
    name: string(),
    age: number(),
  }),
});

export const data = {
  id: 1,
};

export const failures = [
  {
    value: undefined,
    type: "type",
    refinement: undefined,
    path: ["person"],
    branch: [data, undefined],
  },
];
