import { objectLoose, number } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(objectLoose({ a: number() })).returns.toEqualTypeOf<{
  a: number;
}>();
