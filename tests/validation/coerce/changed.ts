import { unknown } from '../../../src/index.js'

export const Struct = unknown().pipe((x) =>
  x == null ? 'unknown' : x
)

export const data = null

export const output = 'unknown'

export const create = true
