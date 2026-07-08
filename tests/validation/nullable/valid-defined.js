import { number, nullable } from "banditypes";

export const Struct = number().or(nullable());

export const data = 42;

export const output = 42;
