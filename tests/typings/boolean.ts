import { boolean } from "#lib";
import { expectTypeOf } from "expect-type";

expectTypeOf(boolean()).returns.toEqualTypeOf<boolean>();
