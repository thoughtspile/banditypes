import { map, unknown } from '../../../src/index.js'

export const Struct = map(unknown(), unknown())

export const data = new Map([
  ['a', 1],
  [2, true],
] as any)

export const output = data
