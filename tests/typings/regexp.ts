import { instance } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(instance(RegExp)).returns.toEqualTypeOf<RegExp>();
