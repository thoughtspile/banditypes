import { object, number, string } from '../../src'
import { expectTypeOf } from 'expect-type'

expectTypeOf(object({})).returns.toEqualTypeOf<Record<string, never>>()

expectTypeOf(object({ 
  a: number(), 
  b: string()
})).returns.toEqualTypeOf<{
  a: number
  b: string
}>()
