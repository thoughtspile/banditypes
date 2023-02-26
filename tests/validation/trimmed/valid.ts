import { string } from '../../../src/index.js'

export const Struct = string().pipe(s => s.trim())

export const data = '  valid  '

export const output = 'valid'

export const create = true
