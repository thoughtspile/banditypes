import { fail, number } from '../../src'
import { test } from '..'

test<number>(number().pipe(x => Number.isInteger(x) ? x : fail()))
