import { string } from "banditypes";
import { expectTypeOf } from "expect-type";

expectTypeOf(string().map((x) => x.trim())).returns.toEqualTypeOf<string>();
