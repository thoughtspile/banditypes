import { object, number, string } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

const schemaA = { a: number() };
const schemaB = { b: string() };
const merged = object({ ...schemaA, ...schemaB });

expectTypeOf(merged).returns.toEqualTypeOf<{
  a: number;
  b: string;
}>();
