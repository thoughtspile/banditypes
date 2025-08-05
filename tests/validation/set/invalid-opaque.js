import { set, unknown } from "#lib";

export const Struct = set(unknown());

export const data = "invalid";

export const failures = [
  {
    value: "invalid",
    type: "set",
    refinement: undefined,
    path: [],
    branch: [data],
  },
];
