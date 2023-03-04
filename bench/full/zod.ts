import {
  string,
  number,
  boolean,
  instanceof as instance,
  array,
  object,
  tuple,
  record,
  set,
  map,
  nullable,
  optional,
  enum as enums,
  unknown,
  literal,
} from "zod";
import { sample } from "./sample";

const schema = object({
  array: array(string()),
  boolean: boolean(),
  func: unknown(),
  date: instance(Date),
  tuple: tuple([number(), number()]),
  nullableEnums: nullable(enums(["EU", "US"])),
  optionalLiteral: optional(literal("HELLO")),
  set: set(string()),
  map: map(string(), boolean()),
  extras: object({
    form: record(unknown()),
  }).passthrough(),
});

try {
  console.log(schema.parse(sample as any));
} catch (err) {
  console.log("fail");
}
