import { record, string, number } from "#lib";

export const Struct = record(number());

export const data = {
  a: 1,
  b: 2,
};

export const output = {
  a: 1,
  b: 2,
};
