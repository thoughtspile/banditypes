import { string } from '../../src'
import { expectTypeOf } from 'expect-type'

expectTypeOf(string().or(() => 'default')).returns.toEqualTypeOf<string>();
