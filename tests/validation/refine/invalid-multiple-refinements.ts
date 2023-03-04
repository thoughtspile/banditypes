import { string, object, fail } from "../../../src/index.js";

const PasswordValidator = string().map((pw) => (pw.length >= 8 ? pw : fail()));
const changePasswordStruct = object({
  newPassword: PasswordValidator,
  confirmPassword: string(),
});

export const Struct = changePasswordStruct.map((values) => {
  return values.newPassword === values.confirmPassword ? values : fail();
});

export const data = {
  newPassword: "1234567",
  confirmPassword: "123456789",
};

export const failures = [
  {
    value: data.newPassword,
    type: "string",
    refinement: "MinimumLength",
    path: ["newPassword"],
    branch: [data, data.newPassword],
  },
  {
    value: data,
    type: "object",
    refinement: "PasswordsDoNotMatch",
    path: [],
    branch: [data],
  },
];
