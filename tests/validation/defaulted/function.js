import { number } from "#lib";

export const Struct = number().or(() => 42);

export const data = undefined;

export const output = 42;

export const create = true;
