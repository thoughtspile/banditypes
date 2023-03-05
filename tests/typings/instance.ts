import { instance } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(instance(Date)).returns.toEqualTypeOf<Date>();
expectTypeOf(instance(RegExp)).returns.toEqualTypeOf<RegExp>();
