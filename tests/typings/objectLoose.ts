import { objectLoose, number } from '../../src'
import { expectTypeOf } from 'expect-type'

expectTypeOf(objectLoose({ a: number() })).returns.toEqualTypeOf<{ a: number }>()
