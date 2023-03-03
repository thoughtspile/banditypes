import { type Infer, object } from '../../src'
import { expectTypeOf } from 'expect-type'

const Struct = object({})
type T = Infer<typeof Struct>

expectTypeOf(Struct).returns.toEqualTypeOf<T>();
