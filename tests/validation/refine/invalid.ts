import { string, fail } from '../../../src/index.js'

export const Struct = string().pipe(() => fail());

export const data = 'invalid'

export const failures = [
  {
    value: 'invalid',
    type: 'string',
    refinement: 'email',
    path: [],
    branch: [data],
  },
]
