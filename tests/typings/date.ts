import { instance, never } from '../../src'
import { test } from '..'

test<Date>(instance(Date).pipe(v => isNaN(v.getTime()) ? never() : v));
