import { string, object, enums } from "../../src";
import { expectTypeOf } from "expect-type";

expectTypeOf(string().or(enums([null]))).returns.toEqualTypeOf<string | null>();

expectTypeOf(object({ a: string().or(enums([null])) })).returns.toEqualTypeOf<{
  a: string | null;
}>();

expectTypeOf(enums(["a", "b", null])).returns.toEqualTypeOf<"a" | "b" | null>();
