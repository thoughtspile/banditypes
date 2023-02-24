export type Cast<T, Source = unknown> = (
  data: Source,
  key?: string | number
) => T;
export interface Banditype<T> extends Cast<T> {
  and<Extra = T>(cast: Cast<Extra, T>): Banditype<Extra>;
  or<Extra>(cast: Cast<Extra>): Banditype<T | Extra>;
}
export type Infer<Schema extends Cast<unknown>> = ReturnType<Schema>;

// factory
export var banditype = <T>(cast: Cast<T>) => {
  var base = ((raw) => cast(raw)) as Banditype<T>;
  (base.and = (extra) => banditype((raw) => extra(cast(raw)))),
    (base.or = (extra) =>
      banditype((raw) => {
        try {
          return cast(raw);
        } catch (err) {
          return extra(raw);
        }
      }));
  return base;
};

// error helper
export var never = (message?: string): never =>
  (null as any)[message || "Banditype error"] as never;

// safe validation helper
export var is = <T>(value: unknown, schema: Banditype<T>): value is T => {
  try {
    schema(value);
    return true;
  } catch (err) {
    return false;
  }
};

// literals
export var literalUnion = <T>(items: readonly T[]) =>
  banditype((raw) => (items.includes(raw as T) ? (raw as T) : never()));

interface Like {
  (tag: string): Banditype<string>;
  (tag: number): Banditype<number>;
  (tag: boolean): Banditype<boolean>;
  (tag: bigint): Banditype<bigint>;
  (tag: () => void): Banditype<(...args: unknown[]) => unknown>;
  (tag: symbol): Banditype<symbol>;
  (tag: undefined): Banditype<undefined>;
}
export var like = ((tag: unknown) =>
  banditype((raw) => (typeof raw === typeof tag ? raw : never()))) as Like;

// objects
export var record = <Item>(
  castValue: Cast<Item>
): Banditype<Record<string, Item>> =>
  banditype((raw: any) => {
    var res: Record<string, Item> = {};
    for (var key in raw) {
      res[key] = castValue(raw[key], key);
    }
    return res;
  });
export var object = <T extends Record<string, Cast<unknown>>>(schema: T) =>
  record((raw: any, key: any) => schema[key]!(raw)) as Banditype<{
    [K in keyof T]: Infer<T[K]>;
  }>;

// arrays
export var array = <Item>(castItem: Cast<Item>) =>
  instance(Array).and((arr) => arr.map(castItem));
export var tuple = <T extends readonly Cast<unknown>[]>(schema: T) =>
  instance(Array).and((arr) => {
    return schema.map((cast, i) => cast(arr[i])) as {
      -readonly [K in keyof T]: Infer<T[K]>;
    };
  });

// classes
export var instance = <T>(proto: new () => T) =>
  banditype((raw) => (raw instanceof proto ? (raw as T) : never()));
export var set = <T>(castItem: Cast<T>) =>
  instance(Set).and((set) => {
    return new Set<T>([...set].map(castItem));
  });
export var map = <K, V>(castKey: Cast<K>, castValue: Cast<V>) =>
  instance(Map).and((map) => {
    return new Map<K, V>([...map].map(([k, v]) => [castKey(k), castValue(v)]));
  });

// export var m = object({
//   tags: array(like('')).and(t => t.length > 0),
//   coord: tuple([like(0), like(0)] as const),
//   created: instance(Date),
//   active: like(true),
//   close: like(()=>{}),
//   country: literalUnion(['EU', 'US'] as const).or(literalUnion([null])),
//   tag: literalUnion(['HELLO'] as const).or(literalUnion([undefined])),
//   boo: set(like('')),
//   foo: map(like(''), like(true)),
//   extras: raw => raw,
//   bad: never,
// });

// export var p = [
//   like(''),
//   like(0),
//   like(true),
//   like(()=>{}),
//   instance(Date),
//   record(like(0)),
//   object,
//   array,
//   tuple,
//   literalUnion,
//   literalUnion([null] as const),
//   like(undefined),
//   raw => raw,
// ];

// export var x = [literalUnion, like, instance, array, object, tuple, record, set, map];
