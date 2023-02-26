import { string, object, enums } from '../../src'
import { test } from '..'

test<string | null>(string().or(enums([null])))

test<{ a: string | null }>(object({ a: string().or(enums([null])) }))

test<'a' | 'b' | null>(enums(['a', 'b', null]))
