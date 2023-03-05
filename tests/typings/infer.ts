import { type Infer, object } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

const Struct = object({});
type T = Infer<typeof Struct>;

expectTypeOf(Struct).returns.toEqualTypeOf<T>();
