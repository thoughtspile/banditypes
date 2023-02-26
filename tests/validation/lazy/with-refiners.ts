import { lazy, fail, string } from '../../../src/index.js'

export const Struct = lazy(() => string().pipe(s => s.length > 0 ? s : fail()))

export const data = ''

export const failures = [
  {
    value: data,
    type: 'string',
    refinement: 'nonempty',
    path: [],
    branch: [data],
  },
]
