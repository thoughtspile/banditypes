import { number, optional } from "#lib";

export const Struct = number().or(optional());

export const data = 42;

export const output = 42;
