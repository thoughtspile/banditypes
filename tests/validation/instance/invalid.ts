import { instance } from '../../../src/index.js'

export const Struct = instance(Array)

export const data = false

export const failures = [
  {
    value: false,
    type: 'instance',
    refinement: undefined,
    path: [],
    branch: [data],
  },
]
