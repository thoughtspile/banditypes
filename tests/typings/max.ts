import { number, fail } from '../../src'
import { test } from '..'

test<number>(number().map(num => num < 0 ? num : fail()))
