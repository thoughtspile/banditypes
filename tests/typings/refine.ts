import { string } from "banditypes";
import { expectTypeOf } from "expect-type";

expectTypeOf(string().map((x) => x)).returns.toEqualTypeOf<string>();
