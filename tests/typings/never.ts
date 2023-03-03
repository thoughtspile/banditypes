import { never } from '../../src'
import { expectTypeOf } from 'expect-type'

expectTypeOf(never()).returns.toEqualTypeOf<never>();
