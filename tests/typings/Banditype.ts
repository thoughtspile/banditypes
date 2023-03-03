import {
  type Banditype,
  object,
  array,
  string,
  number,
  record,
  enums,
  tuple,
  never,
  boolean,
  func,
  map,
  nullable,
  optional,
  set,
  unknown,
} from '../../src'
import { expectTypeOf } from 'expect-type'

expectTypeOf(array(string()))
  .toEqualTypeOf<Banditype<Array<string>>>();

expectTypeOf(boolean())
  .toEqualTypeOf<Banditype<boolean>>();

expectTypeOf(enums(['a', 'b', 'c']))
  .toEqualTypeOf<Banditype<'a' | 'b' | 'c'>>();

expectTypeOf(enums([1, 2, 3]))
  .toEqualTypeOf<Banditype<1 | 2 | 3>>();

expectTypeOf(func())
  .toEqualTypeOf<Banditype<(...args: unknown[]) => unknown>>();


expectTypeOf(enums([false]))
  .toEqualTypeOf<Banditype<false>>();

expectTypeOf(enums([42]))
  .toEqualTypeOf<Banditype<42>>();

expectTypeOf(enums(['test']))
  .toEqualTypeOf<Banditype<'test'>>();

expectTypeOf(map(string(), number()))
  .toEqualTypeOf<Banditype<Map<string, number>>>();

expectTypeOf(never())
  .toEqualTypeOf<Banditype<never>>();

expectTypeOf(string().or(nullable()))
  .toEqualTypeOf<Banditype<string | null>>();

expectTypeOf(number())
  .toEqualTypeOf<Banditype<number>>();

expectTypeOf(object({ name: string() }))
  .toEqualTypeOf<Banditype<{ name: string }>>();

expectTypeOf(object({ name: string().or(optional()) }))
  .toEqualTypeOf<Banditype<{ name?: string }>>();

expectTypeOf(string().or(optional()))
  .toEqualTypeOf<Banditype<string | undefined>>();

expectTypeOf(record(number()))
  .toEqualTypeOf<Banditype<Record<string, number>>>();

expectTypeOf(set(number()))
  .toEqualTypeOf<Banditype<Set<number>>>();

expectTypeOf(string())
  .toEqualTypeOf<Banditype<string>>();

expectTypeOf(tuple([string()] as const))
  .toEqualTypeOf<Banditype<[string]>>();

expectTypeOf(tuple([string(), number()] as const))
  .toEqualTypeOf<Banditype<[string, number]>>();

expectTypeOf(string().or(number()))
  .toEqualTypeOf<Banditype<string | number>>();

expectTypeOf(unknown())
  .toEqualTypeOf<Banditype<unknown>>();
