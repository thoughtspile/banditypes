export type Cast<T, Source = unknown> = (
  data: Source,
  key?: string | number
) => T;
export type Infer<Schema extends Cast<unknown>> = ReturnType<Schema>;

// Core
export const banditype = <T>(cast: Cast<T>) => cast;
export const and = <T, Extra = T>(cast: Cast<T>, extra: Cast<Extra, T>): Cast<Extra> => raw => extra(cast(raw));
export const or = <T, Extra>(cast: Cast<T>, extra: Cast<Extra>): Cast<T | Extra> => (raw) => {
  try {
    return cast(raw);
  } catch (err) {
    return extra(raw);
  }
};

// Error helper
export const never = (message?: string) => (null as any)[message || "Banditype error"] as never;

// Chainable API
export interface Chain<T> extends Cast<T> {
  and: <E>(extra: Cast<E, T>) => Chain<E>;
  or: <E>(extra: Cast<E>) => Chain<E | T>;
}
export const chain = <T>(cast: Cast<T>): Chain<T> => Object.assign(cast, {
  and: extra => chain(and(cast, extra)),
  or: extra => chain(or(cast, extra)),
} as Chain<T>);

// Safe validation helper
export var is = <T>(value: unknown, schema: Cast<T>): value is T => {
  try {
    schema(value);
    return true;
  } catch (err) {
    return false;
  }
};

// literals
export var literal = <T>(items: readonly T[]) =>
  banditype((raw) => (items.includes(raw as T) ? (raw as T) : never()));

// Basic types
type Func = (...args: unknown[]) => unknown;
interface Like {
  (tag: string): Cast<string>;
  (tag: number): Cast<number>;
  (tag: boolean): Cast<boolean>;
  (tag: bigint): Cast<bigint>;
  (tag: Func): Cast<Func>;
  (tag: symbol): Cast<symbol>;
  (tag: undefined): Cast<undefined>;
}
export var like = ((tag: unknown) =>
  banditype((raw) => (typeof raw === typeof tag ? raw : never()))) as Like;
export var string = () => like('');
export var number = () => like(0);
export var boolean = () => like(true);

// Classes
export var instance = <T>(proto: new () => T) =>
  banditype((raw) => (raw instanceof proto ? (raw as T) : never()));

// objects
export var record = <Item>(
  castValue: Cast<Item>
): Cast<Record<string, Item>> =>
  and(instance(Object), (raw: any) => {
    var res: Record<string, Item> = {};
    for (var key in raw) {
      res[key] = castValue(raw[key], key);
    }
    return res;
  });
export var object = <T extends Record<string, unknown>>(schema: {
  [K in keyof T]: Cast<T[K]>;
}) => 
  and(instance(Object), (raw: any) => {
    var res = {} as T;
    for (var key in schema) {
      res[key] = schema[key](raw[key], key);
    }
    return res;
  });

// arrays
export var array = <Item>(castItem: Cast<Item>) =>
  and(instance(Array), (arr) => arr.map(castItem));
export var tuple = <T extends readonly Cast<unknown>[]>(schema: T) =>
  and(instance(Array), (arr) => {
    return schema.map((cast, i) => cast(arr[i])) as {
      -readonly [K in keyof T]: Infer<T[K]>;
    };
  });

export var set = <T>(castItem: Cast<T>) =>
  and(instance(Set), (set) => new Set<T>([...set].map(castItem)));
export var map = <K, V>(castKey: Cast<K>, castValue: Cast<V>) =>
  and(instance(Map), (map) => {
    return new Map<K, V>([...map].map(([k, v]) => [castKey(k), castValue(v)]));
  });

// export var m = object({
//   tags: array(like('')).and(t => t.length > 0 ? t : never()),
//   coord: tuple([like(0), like(0)] as const),
//   created: instance(Date),
//   active: like(true),
//   close: like(()=>{}),
//   country: literal('EU' as const, 'US' as const).or(literal(null)),
//   tag: literal('HELLO' as const).or(literal(undefined)),
//   boo: set(like('')),
//   foo: map(like(''), like(true)),
//   extras: raw => raw,
//   bad: never,
// });

// export var p = [
//   // like(''),
//   // like(0),
//   // like(true),
//   string,
//   number,
//   boolean,
//   like(()=>{}),
//   instance(Date),
//   record(like(0)),
//   object,
//   array,
//   tuple,
//   literal,
//   literal([null] as const),
//   like(undefined),
//   or,
//   map,
//   set,
// ];

// export var x = [literal, string, number, boolean, instance, array, object, tuple, record, set, map, or];
