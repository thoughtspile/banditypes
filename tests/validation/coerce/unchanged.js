import { string, unknown } from "#lib";

export const Struct = unknown()
  .map((x) => (x == null ? "unknown" : x))
  .map(string());

export const data = "known";

export const output = "known";

export const create = true;
