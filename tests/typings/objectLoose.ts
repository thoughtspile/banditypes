import { objectLoose, number } from "banditypes";
import { expectTypeOf } from "expect-type";

expectTypeOf(objectLoose({ a: number() })).returns.toEqualTypeOf<{
  a: number;
}>();
