import { string, object, fail } from '../../../src/index.js'

const PasswordValidator = string().pipe((pw) =>
  pw.length >= 8 ? pw : fail('required minimum length of 8')
)
const changePasswordStruct = object({
  newPassword: PasswordValidator,
  confirmPassword: string(),
})

export const Struct = changePasswordStruct.pipe((values) => {
  return values.newPassword === values.confirmPassword
    ? values
    : fail('Passwords do not match')
})

export const data = {
  newPassword: '1234567',
  confirmPassword: '123456789',
}

export const failures = [
  {
    value: data.newPassword,
    type: 'string',
    refinement: 'MinimumLength',
    path: ['newPassword'],
    branch: [data, data.newPassword],
  },
  {
    value: data,
    type: 'object',
    refinement: 'PasswordsDoNotMatch',
    path: [],
    branch: [data],
  },
]
