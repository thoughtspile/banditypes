import { enums } from '../../src'
import { expectTypeOf } from 'expect-type'

expectTypeOf(enums([true])).returns.toEqualTypeOf<true>()

expectTypeOf(enums(['a'])).returns.toEqualTypeOf<'a'>()

expectTypeOf(enums([42])).returns.toEqualTypeOf<42>()

expectTypeOf(enums([new Date()])).returns.toEqualTypeOf<Date>()
