import { set, string } from "../../src";
import { expectTypeOf } from "expect-type";

expectTypeOf(set(string())).returns.toEqualTypeOf<Set<string>>();
