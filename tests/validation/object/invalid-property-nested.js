import { object, string } from "#lib";

export const Struct = object({
  name: string(),
  address: object({
    street: string(),
    city: string(),
  }),
});

export const data = {
  name: "john",
  address: {
    street: 123,
    city: "Springfield",
  },
};

export const failures = [
  {
    value: 123,
    type: "string",
    refinement: undefined,
    path: ["address", "street"],
    branch: [data, data.address, data.address.street],
  },
];
