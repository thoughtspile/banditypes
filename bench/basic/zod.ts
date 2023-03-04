import {
  string,
  number,
  boolean,
  array,
  object,
  nullable,
  optional,
} from "zod";
import { sample, type Data } from "./sample";

const schema = object({
  array: array(string()),
  boolean: optional(boolean()),
  count: nullable(number()),
});

try {
  console.log(schema.parse(sample as any));
} catch (err) {
  console.log("fail");
}
