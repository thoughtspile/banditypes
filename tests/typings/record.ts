import { record, number } from "banditypes";
import { expectTypeOf } from "expect-type";

expectTypeOf(record(number())).returns.toEqualTypeOf<Record<string, number>>();
