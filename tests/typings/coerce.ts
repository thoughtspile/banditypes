import { string } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(
  string().map((x) => parseFloat(x))
).returns.toEqualTypeOf<number>();
