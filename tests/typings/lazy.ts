import { lazy, string } from "#lib";
import { expectTypeOf } from "expect-type";

expectTypeOf(lazy(() => string())).returns.toEqualTypeOf<string>();
