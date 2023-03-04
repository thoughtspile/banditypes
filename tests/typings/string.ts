import { string } from "../../src";
import { expectTypeOf } from "expect-type";

expectTypeOf(string()).returns.toEqualTypeOf<string>();
