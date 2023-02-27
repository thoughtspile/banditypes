import { instance, fail } from '../../src'
import { test } from '..'

test<Date>(instance(Date).map(v => isNaN(v.getTime()) ? fail() : v));
