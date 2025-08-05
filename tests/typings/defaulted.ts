import { string } from "#lib";
import { expectTypeOf } from "expect-type";

expectTypeOf(string().or(() => "default")).returns.toEqualTypeOf<string>();
