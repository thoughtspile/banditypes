import { set, string } from "banditypes";
import { expectTypeOf } from "expect-type";

expectTypeOf(set(string())).returns.toEqualTypeOf<Set<string>>();
