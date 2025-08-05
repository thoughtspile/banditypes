import { instance } from "#lib";
import { expectTypeOf } from "expect-type";

expectTypeOf(instance(RegExp)).returns.toEqualTypeOf<RegExp>();
