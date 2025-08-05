import { never } from "#lib";
import { expectTypeOf } from "expect-type";

expectTypeOf(never()).returns.toEqualTypeOf<never>();
