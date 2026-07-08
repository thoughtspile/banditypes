import { banditype } from "banditypes";
import { expectTypeOf } from "expect-type";

expectTypeOf(
  banditype<string>((x) => x as string),
).returns.toEqualTypeOf<string>();
