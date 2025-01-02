import { fail, number } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(
  number().map((x) => (Number.isInteger(x) ? x : fail())),
).returns.toEqualTypeOf<number>();
