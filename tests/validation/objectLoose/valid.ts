import { objectLoose, string, number } from '../../../src/index.js'

export const Struct = objectLoose({
  name: string(),
  age: number(),
})

export const data = {
  name: 'john',
  age: 42,
  extra: 'pie'
}

export const output = data
