import { string, array, map, set, fail, unknown } from '../../src'
import { expectTypeOf } from 'expect-type'

expectTypeOf(string().map(v => v.length ? fail() : v)).returns.toEqualTypeOf<string>();

expectTypeOf(array(unknown()).map(v => v.length ? fail() : v)).returns.toEqualTypeOf<Array<unknown>>();

expectTypeOf(set(unknown()).map(v => v.size ? fail() : v)).returns.toEqualTypeOf<Set<unknown>>();

expectTypeOf(map(unknown(), unknown()).map(v => v.size ? fail() : v)).returns.toEqualTypeOf<Map<unknown, unknown>>();
