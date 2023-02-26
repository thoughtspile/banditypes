import { enums } from '../../src'
import { test } from '..'

test<true>(enums([true]))

test<'a'>(enums(['a']))

test<42>(enums([42]))

test<Date>(enums([new Date()]))
