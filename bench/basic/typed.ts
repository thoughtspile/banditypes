import {
  string,
  number,
  boolean,
  array,
  object,
  nullable,
  optional,
} from "typed";
import { sample, type Data } from "./sample";

const schema = object({
  array: array(string()),
  boolean: optional(boolean()),
  count: nullable(number()),
});

try {
  console.log(schema(sample as any));
} catch (err) {
  console.log("fail");
}
