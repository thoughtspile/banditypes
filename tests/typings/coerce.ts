import { string } from '../../src'
import { test } from '..'

test<number>(string().map(x => parseFloat(x)));
