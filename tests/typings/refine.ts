import { string } from "../../src";
import { expectTypeOf } from "expect-type";

expectTypeOf(string().map((x) => x)).returns.toEqualTypeOf<string>();
