import { record, string, number } from "#lib";

export const Struct = record(number());

export const data = "invalid";

export const failures = [
  {
    value: "invalid",
    type: "record",
    refinement: undefined,
    path: [],
    branch: [data],
  },
];
