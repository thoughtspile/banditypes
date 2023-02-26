import { number, nullable } from '../../../src/index.js'

export const Struct = number().or(nullable())

export const data = 42

export const output = 42
