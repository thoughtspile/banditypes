import { array, number, unknown } from "../../src";
import { expectTypeOf } from "expect-type";

expectTypeOf(array(unknown())).returns.toEqualTypeOf<unknown[]>();
expectTypeOf(array(number())).returns.toEqualTypeOf<number[]>();
