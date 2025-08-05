import { string } from "#lib";

export const Struct = string().map((s) => s.trim());

export const data = false;

export const failures = [
  {
    value: false,
    type: "string",
    refinement: undefined,
    path: [],
    branch: [data],
  },
];

export const create = true;
