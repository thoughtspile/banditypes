import { never } from "banditypes";
import { expectTypeOf } from "expect-type";

expectTypeOf(never()).returns.toEqualTypeOf<never>();
