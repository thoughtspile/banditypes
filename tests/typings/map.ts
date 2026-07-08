import { map, string, number } from "banditypes";
import { expectTypeOf } from "expect-type";

expectTypeOf(map(string(), number())).returns.toEqualTypeOf<
  Map<string, number>
>();
