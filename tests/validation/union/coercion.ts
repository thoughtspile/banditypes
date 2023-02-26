import { string, number } from '../../../src/index.js'

const A = string().or(() => 'foo')
const B = number()

export const Struct = A.or(B)

export const data = undefined

export const output = 'foo'

export const create = true
