import { never } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(never()).returns.toEqualTypeOf<never>();
