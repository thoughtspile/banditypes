import { lazy, string } from '../../src'
import { test } from '..'

test<string>(lazy(() => string()))
