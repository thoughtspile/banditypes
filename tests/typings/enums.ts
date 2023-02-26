import {  enums } from '../../src'
import { test } from '..'

test<'a' | 'b' | 'c'>((x) => {
  return enums(['a', 'b', 'c'])(x)
})

test<1 | 2 | 3>((x) => {
  return enums([1, 2, 3])(x)
})

test<1 | 2 | 3>((x) => {
  return enums([1, 2, 3] as const)(x)
})

test<1 | true | '1'>(x => {
  return enums([1, true, '1'])(x)
})

const unique = Symbol();
const unique2 = Symbol();
test<typeof unique | typeof unique2>(x => {
  return enums([unique, unique2])(x)
})

test<number>((x) => {
  let values = [1, 2, 3]
  return enums(values)(x)
})
