import { map, unknown } from "#lib";

export const Struct = map(unknown(), unknown());

/** @type {Array<[string | number, number | boolean]>} */
const items = [
  ["a", 1],
  [2, true],
];
export const data = new Map(items);

export const output = data;
