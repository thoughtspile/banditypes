import { string, number } from "#lib";

const A = string().or(() => "foo");
const B = number();

export const Struct = A.or(B);

export const data = undefined;

export const output = "foo";

export const create = true;
