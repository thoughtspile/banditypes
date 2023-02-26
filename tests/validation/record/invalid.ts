import { record, string, number } from '../../../src/index.js'

export const Struct = record(number())

export const data = 'invalid'

export const failures = [
  {
    value: 'invalid',
    type: 'record',
    refinement: undefined,
    path: [],
    branch: [data],
  },
]
