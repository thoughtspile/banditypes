import { fail, number } from '../../../src/index.js'

export const Struct = number().pipe((v) => v > 0 ? v : fail('Number was not positive!'))

export const data = -1

export const failures = [
  {
    value: -1,
    type: 'number',
    refinement: 'positive',
    path: [],
    branch: [data],
  },
]
