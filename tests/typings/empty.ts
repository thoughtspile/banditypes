import { string, array, map, set, fail, unknown } from '../../src'
import { test } from '..'

test<string>(string().map(v => v.length ? fail() : v))

test<Array<unknown>>(array(unknown()).map(v => v.length ? fail() : v))

test<Set<unknown>>(set(unknown()).map(v => v.size ? fail() : v))

test<Map<unknown, unknown>>(map(unknown(), unknown()).map(v => v.size ? fail() : v))
