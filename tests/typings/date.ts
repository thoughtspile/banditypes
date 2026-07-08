import { instance, fail } from "banditypes";
import { expectTypeOf } from "expect-type";

expectTypeOf(
  instance(Date).map((v) => (isNaN(v.getTime()) ? fail() : v)),
).returns.toEqualTypeOf<Date>();
