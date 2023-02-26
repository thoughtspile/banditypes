import { object, number } from '../../src'
import { test } from '..'

test<{ a?: number }>(object({ a: number() }))
