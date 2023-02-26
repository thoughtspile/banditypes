import { string, fail } from '../../../src/index.js'

export const Struct = string().pipe(x => x === data ? x : fail())

export const data = 'name@example.com'

export const output = 'name@example.com'
