import { array, number, unknown } from '../../src'
import { test } from '..'

test<unknown[]>(array(unknown()))
test<number[]>(array(number()))
