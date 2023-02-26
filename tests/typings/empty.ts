import { string, array, map, set, never, unknown } from '../../src'
import { test } from '..'

test<string>(string().pipe(v => v.length ? never() : v))

test<Array<unknown>>(array(unknown()).pipe(v => v.length ? never() : v))

test<Set<unknown>>(set(unknown()).pipe(v => v.size ? never() : v))

test<Map<unknown, unknown>>(map(unknown(), unknown()).pipe(v => v.size ? never() : v))
