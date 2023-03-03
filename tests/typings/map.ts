import { map, string, number } from '../../src'
import { expectTypeOf } from 'expect-type'

expectTypeOf(map(string(), number())).returns.toEqualTypeOf<Map<string, number>>()
