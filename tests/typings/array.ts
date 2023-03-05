import { array, number, unknown } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(array(unknown())).returns.toEqualTypeOf<unknown[]>();
expectTypeOf(array(number())).returns.toEqualTypeOf<number[]>();
