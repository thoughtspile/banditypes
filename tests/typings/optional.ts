import { optional, string, number, object, enums } from '../../src'
import { expectTypeOf } from 'expect-type';

expectTypeOf(string().or(optional())).returns.toEqualTypeOf<string | undefined>()

expectTypeOf(object({
  a: number().or(optional()),
  b: string(),
})).returns.toEqualTypeOf<{
  a?: number
  b: string
}>()
