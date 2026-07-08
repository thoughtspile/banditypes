import { string, object } from "banditypes";

export const Struct = object({
  title: string().or(() => "Untitled"),
});

export const data = {};

export const output = {
  title: "Untitled",
};

export const create = true;
