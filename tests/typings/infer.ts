import { type Infer, object } from "#lib";
import { expectTypeOf } from "expect-type";

const Struct = object({});
type T = Infer<typeof Struct>;

expectTypeOf(Struct).returns.toEqualTypeOf<T>();
