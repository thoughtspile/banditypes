import { number } from '../../../src/index.js'

export const Struct = number().map(() => 'known')

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
