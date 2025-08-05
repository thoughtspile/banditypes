import { func } from "#lib";
import { expectTypeOf } from "expect-type";

expectTypeOf(func()).returns.toEqualTypeOf<(...args: unknown[]) => unknown>();
