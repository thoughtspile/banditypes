import { string } from '../../src'
import { expectTypeOf } from 'expect-type'

expectTypeOf(string().map(x => parseFloat(x))).returns.toEqualTypeOf<number>();
