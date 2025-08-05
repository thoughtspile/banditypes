import { string, number, object } from "#lib";

const A = string();
const B = object({ a: number(), b: number().or(() => 5) });

export const Struct = A.or(B);

export const data = { a: 5 };

export const output = { a: 5, b: 5 };

export const create = true;
