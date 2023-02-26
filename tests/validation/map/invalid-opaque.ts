import { map, unknown } from '../../../src/index.js'

export const Struct = map(unknown(), unknown())

export const data = 'invalid'

export const failures = [
  {
    value: 'invalid',
    type: 'map',
    refinement: undefined,
    path: [],
    branch: [data],
  },
]
