import { type, number } from '../../src'
import { test } from '..'

test<{ a: number }>(type({ a: number() }))
