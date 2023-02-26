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
import { test } from '..'

test<Banditype<Array<string>>>((x) => {
  return array(string())
})

test<Banditype<boolean>>((x) => {
  return boolean()
})

test<Banditype<'a' | 'b' | 'c'>>((x) => {
  return enums(['a', 'b', 'c'])
})

test<Banditype<1 | 2 | 3>>((x) => {
  return enums([1, 2, 3])
})

test<Banditype<Function>>((x) => {
  return func()
})


test<Banditype<false>>((x) => {
  return enums([false])
})

test<Banditype<42>>((x) => {
  return enums([42])
})

test<Banditype<'test'>>((x) => {
  return enums(['test'])
})

test<Banditype<Map<string, number>>>((x) => {
  return map(string(), number())
})

test<Banditype<never>>((x) => {
  return never()
})

test<Banditype<string | null>>((x) => {
  return string().or(nullable())
})

test<Banditype<number>>((x) => {
  return number()
})

test<Banditype<{ name: string }>>((x) => {
  return object({ name: string() })
})

test<Banditype<{ name?: string }>>((x) => {
  return object({ name: string().or(optional()) })
})

test<Banditype<string | undefined>>((x) => {
  return string().or(optional())
})

test<Banditype<Record<string, number>>>((x) => {
  return record(number())
})

test<Banditype<Set<number>>>((x) => {
  return set(number())
})

test<Banditype<string>>((x) => {
  return string()
})

test<Banditype<[string]>>((x) => {
  return tuple([string()] as const)
})

test<Banditype<[string, number]>>((x) => {
  return tuple([string(), number()] as const)
})

test<Banditype<string | number>>((x) => {
  return string().or(number())
})

test<Banditype<unknown>>((x) => {
  return unknown()
})
