import { record, number } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(record(number())).returns.toEqualTypeOf<Record<string, number>>();
