import { set, string } from '../../src'
import { test } from '..'

test<Set<string>>(set(string()))
