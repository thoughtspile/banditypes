import { lazy, string } from "../../src";
import { expectTypeOf } from "expect-type";

expectTypeOf(lazy(() => string())).returns.toEqualTypeOf<string>();
