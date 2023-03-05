import { set, string } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(set(string())).returns.toEqualTypeOf<Set<string>>();
