import { string, number, boolean, array, object, nullable, optional } from '../../src';
import { sample, type Data } from './sample';

const schema = object<Data>({
  array: array(string()),
  boolean: boolean().or(optional()),
  count: number().or(nullable())
});

try {
  console.log(schema(sample as any));
} catch (err) {
  console.log('fail');
}
