import { string } from '../../src'
import { test } from '..'

test<string>(string().pipe(x => x.trim()))
