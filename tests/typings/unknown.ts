import { unknown } from "banditypes";
import { expectTypeOf } from "expect-type";

expectTypeOf(unknown()).returns.toEqualTypeOf<unknown>();
