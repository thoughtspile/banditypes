import { expectTypeOf } from "expect-type";
import { banditype } from "../../src";

expectTypeOf(banditype<any>((raw) => raw)).returns.toEqualTypeOf<any>();
