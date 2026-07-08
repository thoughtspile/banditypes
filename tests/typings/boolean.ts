import { boolean } from "banditypes";
import { expectTypeOf } from "expect-type";

expectTypeOf(boolean()).returns.toEqualTypeOf<boolean>();
