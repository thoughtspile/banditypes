import { map, string, number } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(map(string(), number())).returns.toEqualTypeOf<
  Map<string, number>
>();
