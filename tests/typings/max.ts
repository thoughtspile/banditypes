import { number, fail } from '../../src'
import { expectTypeOf } from 'expect-type'

expectTypeOf(number().map(num => num < 0 ? num : fail())).returns.toEqualTypeOf<number>();
