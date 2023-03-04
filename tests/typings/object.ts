import { object, number, string, Banditype } from "../../src";
import { expectTypeOf } from "expect-type";

expectTypeOf(object({})).returns.toEqualTypeOf<Record<string, never>>();

expectTypeOf(
  object({
    a: number(),
    b: string(),
  })
).returns.toEqualTypeOf<{
  a: number;
  b: string;
}>();

expectTypeOf(
  object<{ key?: string }>({
    key: string(),
  })
).parameters.toEqualTypeOf<{
  key: Banditype<string>;
}>;
