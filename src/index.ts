export type Cast<T, Source = unknown> = (
  data: Source,
  key?: string | number
) => T;
export type Infer<Schema extends Cast<unknown>> = ReturnType<Schema>;
// Chainable API
export interface Banditype<T> extends Cast<T> {
  pipe: <E>(extra: Cast<E, T>) => Banditype<E>;
  or: <E>(extra: Cast<E>) => Banditype<E | T>;
}

// Core
export var banditype = <T>(cast: Cast<T>): Banditype<T> => Object.assign(cast, {
  pipe: extra => banditype(raw => extra(cast(raw))),
  or: extra => banditype((raw) => {
    try {
      return cast(raw);
    } catch (err) {
      return extra(raw);
    }
  }),
} as Banditype<T>);

// Error helper
export var never = (_val?: unknown, message?: string) => (null as any)[message || "Banditype error"] as never;

export var unknown = () => banditype(raw => raw);

// literals
// not sure why, but this signature prevents wideing [90] -> number[]
type Primitive = string | number | null | undefined | boolean | symbol | object;
export var enums = <U extends Primitive, T extends readonly U[]>(items: T) =>
  banditype((raw) => (items.includes(raw as T[number]) ? (raw as T[number]) : never()));

// Basic types
type Func = (...args: unknown[]) => unknown;
export interface Like {
  (tag: string): Banditype<string>;
  (tag: number): Banditype<number>;
  (tag: boolean): Banditype<boolean>;
  (tag: bigint): Banditype<bigint>;
  (tag: Func): Banditype<Func>;
  (tag: symbol): Banditype<symbol>;
  (): Banditype<undefined>;
}
export var like = ((tag: unknown) =>
  banditype((raw) => (typeof raw === typeof tag ? raw : never()))) as Like;
export var string = () => like('');
export var number = () => like(0);
export var boolean = () => like(true);
export var func = () => like(never);
export var optional = () => like();
export var nullable = () => banditype(v => v === null ? v : never());

// Classes
export var instance = <T>(proto: new (...args: unknown[]) => T) =>
  banditype((raw) => (raw instanceof proto ? (raw as T) : never()));

// objects
export var record = <Item>(
  castValue: Cast<Item>
): Banditype<Record<string, Item>> =>
  instance(Object).pipe((raw: any) => {
    var res: Record<string, Item> = {};
    for (var key in raw) {
      res[key] = castValue(raw[key], key);
    }
    return res;
  });
export var object = <T = Record<string, never>>(schema: {
  [K in keyof T]: Cast<T[K]>;
}) => 
  instance(Object).pipe<T>((raw: any) => {
    var res = {} as T;
    for (var key in schema) {
      res[key] = schema[key](raw[key], key);
    }
    return res;
  });
export var type = <T extends Record<string, unknown> = Record<string, never>>(schema: {
  [K in keyof T]: Cast<T[K]>;
}) => 
  instance(Object).pipe<T>((raw: any) => {
    var res = {...raw} as T;
    for (var key in schema) {
      res[key] = schema[key](raw[key], key);
    }
    return res;
  });

// arrays
export var array = <Item>(castItem: Cast<Item>) =>
  instance(Array).pipe((arr) => arr.map(castItem));
export var tuple = <T extends readonly Cast<unknown>[]>(schema: T) =>
  instance(Array).pipe((arr) => {
    return schema.map((cast, i) => cast(arr[i])) as {
      -readonly [K in keyof T]: Infer<T[K]>;
    };
  });

export var set = <T>(castItem: Cast<T>) =>
  instance(Set).pipe((set) => new Set<T>([...set].map(castItem)));
export var map = <K, V>(castKey: Cast<K>, castValue: Cast<V>) =>
  instance(Map).pipe((map) => {
    return new Map<K, V>([...map].map(([k, v]) => [castKey(k), castValue(v)]));
  });

export var lazy = <T>(cast: () => Cast<T>) => banditype(raw => cast()(raw));

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

// export var x = [banditype, string, number, boolean, instance, array, object, tuple, record, set, map, lazy, nullable, optional, enums, unknown];
