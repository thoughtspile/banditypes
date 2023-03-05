import { fail, string } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(
  string().map((x) => (/.*/.test(x) ? x : fail()))
).returns.toEqualTypeOf<string>();
