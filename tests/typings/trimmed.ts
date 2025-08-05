import { string } from "#lib";
import { expectTypeOf } from "expect-type";

expectTypeOf(string().map((x) => x.trim())).returns.toEqualTypeOf<string>();
