import { string } from '../../../src/index.js'

export const Struct = string().pipe(s => s.trim())

export const data = false

export const failures = [
  {
    value: false,
    type: 'string',
    refinement: undefined,
    path: [],
    branch: [data],
  },
]

export const create = true
