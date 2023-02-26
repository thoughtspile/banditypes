import { objectLoose, string, number } from '../../../src/index.js'

export const Struct = objectLoose({
  name: string(),
  age: number(),
})

export const data = {
  name: 'john',
  age: 'invalid',
}

export const failures = [
  {
    value: 'invalid',
    type: 'number',
    refinement: undefined,
    path: ['age'],
    branch: [data, data.age],
  },
]
