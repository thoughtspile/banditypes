import { fail, number } from '../../src'
import { test } from '..'

test<number>(number().map(x => Number.isInteger(x) ? x : fail()))
