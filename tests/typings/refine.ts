import { string } from '../../src'
import { test } from '..'

test<string>(string().map(x => x))
