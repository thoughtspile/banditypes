import { enums } from "../../src";
import { expectTypeOf } from "expect-type";

expectTypeOf((x) => {
  return enums(["a", "b", "c"])(x);
}).returns.toEqualTypeOf<"a" | "b" | "c">();

expectTypeOf((x) => {
  return enums([1, 2, 3])(x);
}).returns.toEqualTypeOf<1 | 2 | 3>();

expectTypeOf((x) => {
  return enums([1, 2, 3] as const)(x);
}).returns.toEqualTypeOf<1 | 2 | 3>();

expectTypeOf((x) => {
  return enums([1, true, "1"])(x);
}).returns.toEqualTypeOf<1 | true | "1">();

const unique = Symbol();
const unique2 = Symbol();
expectTypeOf((x) => {
  return enums([unique, unique2])(x);
}).returns.toEqualTypeOf<typeof unique | typeof unique2>();

expectTypeOf((x) => {
  let values = [1, 2, 3];
  return enums(values)(x);
}).returns.toEqualTypeOf<number>();
