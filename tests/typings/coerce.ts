import { string } from '../../src'
import { test } from '..'

test<number>(string().pipe(x => parseFloat(x)));
