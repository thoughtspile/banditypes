import { record, number } from '../../src'
import { test } from '..'

test<Record<string, number>>(record(number()))
