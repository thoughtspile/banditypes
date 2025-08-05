import { instance, fail } from "#lib";
import { expectTypeOf } from "expect-type";

expectTypeOf(
  instance(Date).map((v) => (isNaN(v.getTime()) ? fail() : v)),
).returns.toEqualTypeOf<Date>();
