import { string } from "banditypes";
import { expectTypeOf } from "expect-type";

expectTypeOf(string()).returns.toEqualTypeOf<string>();
