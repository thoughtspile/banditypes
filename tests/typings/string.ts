import { string } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(string()).returns.toEqualTypeOf<string>();
