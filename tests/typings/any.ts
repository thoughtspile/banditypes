import { expectTypeOf } from "expect-type";
import { banditype } from "#lib";

expectTypeOf(banditype<any>((raw) => raw)).returns.toEqualTypeOf<any>();
