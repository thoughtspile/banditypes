import { func } from "banditypes";
import { expectTypeOf } from "expect-type";

expectTypeOf(func()).returns.toEqualTypeOf<(...args: unknown[]) => unknown>();
