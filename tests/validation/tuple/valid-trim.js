import { tuple, string, number } from "#lib";

export const Struct = tuple([string(), number()]);

export const data = ["A", 3, "unknown"];

export const output = ["A", 3];
