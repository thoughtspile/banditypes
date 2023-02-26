import { map, string, number } from '../../src'
import { test } from '..'

test<Map<string, number>>(map(string(), number()))
