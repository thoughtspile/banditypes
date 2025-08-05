import { string } from "#lib";
import { expectTypeOf } from "expect-type";

expectTypeOf(string()).returns.toEqualTypeOf<string>();
