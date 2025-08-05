import { number, nullable } from "#lib";

export const Struct = number().or(nullable());

export const data = 42;

export const output = 42;
