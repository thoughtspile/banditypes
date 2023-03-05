import { string } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(string().or(() => "default")).returns.toEqualTypeOf<string>();
