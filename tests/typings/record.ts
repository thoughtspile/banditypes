import { record, number } from "#lib";
import { expectTypeOf } from "expect-type";

expectTypeOf(record(number())).returns.toEqualTypeOf<Record<string, number>>();
