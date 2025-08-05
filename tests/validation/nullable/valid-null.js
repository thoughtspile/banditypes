import { number, nullable } from "#lib";

export const Struct = number().or(nullable());

export const data = null;

export const output = null;
