import { array, object, string } from "#lib";

export const Struct = array(object({ id: string() }));

export const data = [{ id: "1" }, { id: false }, { id: "3" }];

export const failures = [
  {
    value: false,
    type: "string",
    refinement: undefined,
    path: [1, "id"],
    branch: [data, data[1], false],
  },
];
