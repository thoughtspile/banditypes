import { string, array, map, set, fail, unknown } from '../../src'
import { test } from '..'

test<string>(string().pipe(v => v.length ? fail() : v))

test<Array<unknown>>(array(unknown()).pipe(v => v.length ? fail() : v))

test<Set<unknown>>(set(unknown()).pipe(v => v.size ? fail() : v))

test<Map<unknown, unknown>>(map(unknown(), unknown()).pipe(v => v.size ? fail() : v))
