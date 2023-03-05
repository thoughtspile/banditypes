import { number } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(number()).returns.toEqualTypeOf<number>();
