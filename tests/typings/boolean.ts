import { boolean } from "../../src";
import { expectTypeOf } from "expect-type";

expectTypeOf(boolean()).returns.toEqualTypeOf<boolean>();
