import { banditype } from '../../src'
import { test } from '..'

test<string>(banditype<string>((x) => x as string));
