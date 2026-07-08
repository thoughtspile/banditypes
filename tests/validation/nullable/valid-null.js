import { number, nullable } from "banditypes";

export const Struct = number().or(nullable());

export const data = null;

export const output = null;
