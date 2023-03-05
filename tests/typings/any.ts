import { expectTypeOf } from "expect-type";
import { banditype } from "$lib/index.js";

expectTypeOf(banditype<any>((raw) => raw)).returns.toEqualTypeOf<any>();
