import { fail, string } from '../../src'
import { test } from '..'

test<string>(string().map(x => /.*/.test(x) ? x : fail()))
