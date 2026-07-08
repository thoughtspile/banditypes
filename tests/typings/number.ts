import { number } from "banditypes";
import { expectTypeOf } from "expect-type";

expectTypeOf(number()).returns.toEqualTypeOf<number>();
