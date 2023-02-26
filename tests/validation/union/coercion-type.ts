import { string, number, objectLoose } from '../../../src/index.js'

const A = string()
const B = objectLoose({ a: number(), b: number().or(() => 5) })

export const Struct = A.or(B)

export const data = { a: 5 }

export const output = { a: 5, b: 5 }

export const create = true
