import { string, number, boolean, array, object, nullable, optional } from 'superstruct';
import { sample, type Data } from './sample';

const schema = object({
  array: array(string()),
  boolean: optional(boolean()),
  count: nullable(number())
});

try {
  console.log(schema.create(sample as any));
} catch (err) {
  console.log('fail');
}
