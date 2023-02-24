type Cast<T, Source = unknown> = (data: Source) => T;
interface Banditype<T> extends Cast<T> {
  and<Extra = T>(cast: Cast<Extra, T>): Banditype<Extra>;
  or<Extra>(cast: Cast<Extra>): Banditype<T | Extra>;
}
type Infer<Schema extends Cast<unknown>> = ReturnType<Schema>;

// factory
var banditype = <T>(cast: Cast<T>): Banditype<T> => ({
  ...((raw) => cast(raw)),
  and: (extra) => banditype((raw) => extra(cast(raw))),
  or: (extra) =>
    banditype((raw) => {
      try {
        return cast(raw);
      } catch (err) {
        return extra(raw);
      }
    })
}) as Banditype<T>;

// error helper
var never = (message?: string): never => (null as any)[message || "Banditype error"] as never;

// safe validation helper
var is = <T>(value: unknown, schema: Banditype<T>): value is T => {
  try {
    schema(value);
    return true;
  } catch (err) {
    return false;
  }
};

// literals
var literalUnion = <T>(items: readonly T[]) => banditype(raw => items.includes(raw as T) ? raw as T : never());

interface Like {
  (tag: string): Banditype<string>;
  (tag: number): Banditype<number>;
  (tag: boolean): Banditype<boolean>;
  (tag: (() => void)): Banditype<(...args: unknown[]) => unknown>;
  (tag: object): Banditype<object | null>;
}
var like = ((tag: unknown) => banditype((raw) => (typeof raw === typeof tag ? raw : never()))) as Like;

// objects
var object = <T extends Record<string, Cast<unknown>>>(
  schema: T
) => {
  return banditype<{ [K in keyof T]: Infer<T[K]> }>((raw: any) => {
    var res = {} as any;
    for (var key in schema) {
      res[key] = schema[key]!(raw[key]);
    }
    return res;
  });
};

// arrays
var array = <Item>(castItem: Cast<Item>) =>
  instance(Array).and((arr) => arr.map(castItem));
var tuple = <T extends readonly Cast<unknown>[]>(schema: T) =>
  instance(Array).and((arr) => {
    return schema.map((cast, i) => cast(arr[i])) as {
      -readonly [K in keyof T]: Infer<T[K]>;
    };
  });

// classes
var instance = <T>(constructor: new () => T) =>
  banditype((raw) => (raw instanceof constructor ? raw as T : never()));

export var m = object({
  tags: array(like('')).and(t => t.length > 0),
  coord: tuple([like(0), like(0)] as const),
  created: instance(Date),
  active: like(true),
  close: like(like),
  country: literalUnion(['EU', 'US'] as const).or(literalUnion([null] as const)),
  tag: literalUnion(['HELLO'] as const).or(literalUnion([undefined] as const)),
  extras: raw => raw,
  bad: never,
});

// export var p = [
//   object, 
//   array, 
//   like('').and(t => t.length > 0),
//   tuple,
//   like(0),
//   instance(Date),
//   like(true),
//   like(()=>{}),
//   literalUnion,
//   literalUnion([null] as const),
//   literalUnion([undefined] as const),
//   raw => raw,
// ];
