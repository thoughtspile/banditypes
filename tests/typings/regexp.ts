import { instance } from "banditypes";
import { expectTypeOf } from "expect-type";

expectTypeOf(instance(RegExp)).returns.toEqualTypeOf<RegExp>();
