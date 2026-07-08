import { expectTypeOf } from "expect-type";
import { banditype } from "banditypes";

expectTypeOf(banditype<any>((raw) => raw)).returns.toEqualTypeOf<any>();
