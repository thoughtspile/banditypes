import { func } from '../../src'
import { expectTypeOf } from 'expect-type'

expectTypeOf(func()).returns.toEqualTypeOf<(...args: unknown[]) => unknown>();
