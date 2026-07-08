import { lazy, string } from "banditypes";
import { expectTypeOf } from "expect-type";

expectTypeOf(lazy(() => string())).returns.toEqualTypeOf<string>();
