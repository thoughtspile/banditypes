import { string, unknown } from '../../../src/index.js'

export const Struct = unknown().pipe((x) =>
  x == null ? 'unknown' : x
).pipe(string())

export const data = 'known'

export const output = 'known'

export const create = true
