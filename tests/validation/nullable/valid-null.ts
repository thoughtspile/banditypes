import { number, nullable } from "../../../src/index.js";

export const Struct = number().or(nullable());

export const data = null;

export const output = null;
