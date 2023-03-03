import { unknown } from '../../src'
import { expectTypeOf } from 'expect-type'

expectTypeOf(unknown()).returns.toEqualTypeOf<unknown>()
