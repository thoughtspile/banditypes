import {
  string,
  number,
  boolean,
  literal,
  union,
  array,
  object,
  tuple,
  record,
  map,
  nullable,
  optional,
  unknown,
} from "typed";
import { sample } from "./sample";

const schema = object({
  array: array(string()),
  boolean: boolean(),
  tuple: tuple([number(), number()]),
  nullableEnums: nullable(union([literal("EU"), literal("US")])),
  optionalLiteral: optional(literal("HELLO")),
  map: map(string(), boolean()),
  extras: object({
    form: record(string(), unknown),
  }),
});

try {
  console.log(schema(sample as any));
} catch (err) {
  console.log("fail");
}
