import { number } from '../../src'
import { expectTypeOf } from 'expect-type'

expectTypeOf(number()).returns.toEqualTypeOf<number>()
