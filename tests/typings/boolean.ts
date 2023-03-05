import { boolean } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(boolean()).returns.toEqualTypeOf<boolean>();
