import { fail, string } from '../../src'
import { test } from '..'

test<string>(string().pipe(x => /.*/.test(x) ? x : fail()))
