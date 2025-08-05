import { string, fail } from "#lib";

export const Struct = string().map(() => fail());

export const data = "invalid";

export const failures = [
  {
    value: "invalid",
    type: "string",
    refinement: "email",
    path: [],
    branch: [data],
  },
];
