import { instance } from '../../src'
import { test } from '..'

test<Date>(instance(Date))
test<RegExp>(instance(RegExp))
