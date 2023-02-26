import { objectLoose, number } from '../../src'
import { test } from '..'

test<{ a: number }>(objectLoose({ a: number() }))
