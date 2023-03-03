import { instance } from '../../src'
import { expectTypeOf } from 'expect-type'

expectTypeOf(instance(RegExp)).returns.toEqualTypeOf<RegExp>()
