import { banditype } from "#lib";
import { expectTypeOf } from "expect-type";

expectTypeOf(
  banditype<string>((x) => x as string),
).returns.toEqualTypeOf<string>();
