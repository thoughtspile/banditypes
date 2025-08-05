import { fail, string } from "#lib";
import { expectTypeOf } from "expect-type";

expectTypeOf(
  string().map((x) => (/.*/.test(x) ? x : fail())),
).returns.toEqualTypeOf<string>();
