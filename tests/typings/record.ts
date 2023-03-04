import { record, number } from "../../src";
import { expectTypeOf } from "expect-type";

expectTypeOf(record(number())).returns.toEqualTypeOf<Record<string, number>>();
