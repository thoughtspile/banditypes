import { optional, string, number, object, enums } from '../../src'
import { test } from '..'

test<string | undefined>(string().or(optional()))

test<{
  a?: number | undefined
  b: string
}>(object({
  a: number().or(optional()),
  b: string(),
}))