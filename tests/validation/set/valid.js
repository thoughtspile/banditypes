import { set, number } from "banditypes";

export const Struct = set(number());

export const data = new Set([1, 2, 3]);

export const output = new Set([1, 2, 3]);
