import { func } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(func()).returns.toEqualTypeOf<(...args: unknown[]) => unknown>();
