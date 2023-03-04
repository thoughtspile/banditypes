import {
  string,
  number,
  boolean,
  func,
  instance,
  array,
  object,
  type,
  tuple,
  record,
  set,
  map,
  nullable,
  optional,
  enums,
  unknown,
} from "superstruct";
import { sample } from "./sample";

const schema = object({
  array: array(string()),
  boolean: boolean(),
  func: func(),
  date: instance(Date),
  tuple: tuple([number(), number()]),
  nullableEnums: nullable(enums(["EU", "US"])),
  optionalLiteral: optional(enums(["HELLO"])),
  set: set(string()),
  map: map(string(), boolean()),
  extras: type({
    form: record(string(), unknown()),
  }),
});

try {
  console.log(schema.create(sample as any));
} catch (err) {
  console.log("fail");
}
