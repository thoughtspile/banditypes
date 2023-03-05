import { lazy, string } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(lazy(() => string())).returns.toEqualTypeOf<string>();
