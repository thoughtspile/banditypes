import { objectLoose, number } from "#lib";
import { expectTypeOf } from "expect-type";

expectTypeOf(objectLoose({ a: number() })).returns.toEqualTypeOf<{
  a: number;
}>();
