import { number, fail } from '../../src'
import { test } from '..'

test<number>(number().pipe(num => num < 0 ? num : fail()))
