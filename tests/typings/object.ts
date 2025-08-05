import { object, number, string, type Cast } from "#lib";
import { expectTypeOf } from "expect-type";

expectTypeOf(object({})).returns.toEqualTypeOf<Record<string, never>>();

expectTypeOf(
  object({
    a: number(),
    b: string(),
  }),
).returns.toEqualTypeOf<{
  a: number;
  b: string;
}>();

expectTypeOf(object<{ key?: string }>)
  .parameter(0)
  .toEqualTypeOf<{
    key: Cast<string | undefined>;
  }>();
