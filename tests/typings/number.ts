import { number } from "#lib";
import { expectTypeOf } from "expect-type";

expectTypeOf(number()).returns.toEqualTypeOf<number>();
