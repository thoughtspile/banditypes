import { number, fail } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(
  number().map((num) => (num < 0 ? num : fail()))
).returns.toEqualTypeOf<number>();
