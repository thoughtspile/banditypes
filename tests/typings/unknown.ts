import { unknown } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(unknown()).returns.toEqualTypeOf<unknown>();
