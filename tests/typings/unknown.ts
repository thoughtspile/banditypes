import { unknown } from "#lib";
import { expectTypeOf } from "expect-type";

expectTypeOf(unknown()).returns.toEqualTypeOf<unknown>();
