import { type Infer, object } from '../../src'
import { test } from '..'

const Struct = object({})
type T = Infer<typeof Struct>

test<T>((x) => Struct(x));
