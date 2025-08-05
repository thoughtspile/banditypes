import { instance } from "#lib";
import { expectTypeOf } from "expect-type";

expectTypeOf(instance(Date)).returns.toEqualTypeOf<Date>();
expectTypeOf(instance(RegExp)).returns.toEqualTypeOf<RegExp>();
