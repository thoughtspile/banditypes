import { object, array, string } from "#lib";

export const Struct = object({
  name: string(),
  emails: array(string()),
});

export const data = {
  name: "john",
  emails: ["name@example.com", false],
};

export const failures = [
  {
    value: false,
    type: "string",
    refinement: undefined,
    path: ["emails", 1],
    branch: [data, data.emails, data.emails[1]],
  },
];
