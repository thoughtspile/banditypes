import { never, string } from '../../src'
import { test } from '..'

test<string>(string().pipe(x => /.*/.test(x) ? x : never()))
