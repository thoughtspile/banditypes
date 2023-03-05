import { string } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(string().map((x) => x)).returns.toEqualTypeOf<string>();
