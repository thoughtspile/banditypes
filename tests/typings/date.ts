import { instance, fail } from '../../src'
import { test } from '..'

test<Date>(instance(Date).pipe(v => isNaN(v.getTime()) ? fail() : v));
