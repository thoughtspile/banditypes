import { string, object } from "../../../src/index.js";

export const Struct = object({
  title: string().or(() => "Untitled"),
});

export const data = {};

export const output = {
  title: "Untitled",
};

export const create = true;
