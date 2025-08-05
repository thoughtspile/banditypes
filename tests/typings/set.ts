import { set, string } from "#lib";
import { expectTypeOf } from "expect-type";

expectTypeOf(set(string())).returns.toEqualTypeOf<Set<string>>();
