import { banditype } from "../../src";
import { expectTypeOf } from "expect-type";

expectTypeOf(
  banditype<string>((x) => x as string)
).returns.toEqualTypeOf<string>();
