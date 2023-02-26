import { object, number, string } from '../../src'
import { test } from '..'

test<{
  a: number
  b: string
}>((x) => {
  const schemaA = { a: number() };
  const schemaB = { b: string() };
  return object({ ...schemaA, ...schemaB })(x);
})
