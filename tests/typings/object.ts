import { object, number, string } from '../../src'
import { test } from '..'

test<Record<string, never>>(object({}))

test<{
  a: number
  b: string
}>(object({ a: number(), b: string() }))
