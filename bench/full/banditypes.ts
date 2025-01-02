import {
  string,
  number,
  boolean,
  func,
  instance,
  array,
  object,
  objectLoose,
  tuple,
  record,
  set,
  map,
  nullable,
  optional,
  enums,
  unknown,
} from "../../src";
import { sample, type Data } from "./sample";

const schema = object<Data>({
  array: array(string()),
  boolean: boolean(),
  func: func(),
  date: instance(Date),
  tuple: tuple([number(), number()] as const),
  nullableEnums: enums(["EU", "US"]).or(nullable()),
  optionalLiteral: enums(["HELLO"]).or(optional()),
  set: set(string()),
  map: map(string(), boolean()),
  extras: objectLoose({
    form: record(unknown()),
  }),
});

try {
  console.log(schema(sample as any));
} catch (err) {
  console.log("fail");
}
