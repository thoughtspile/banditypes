import { never } from '../../src'
import { test } from '..'

test<never>((x) => never(x))

