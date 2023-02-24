type Cast<T, Source = unknown> = (data: Source) => T;
export interface Banditype<T> extends Cast<T> {
  and<Extra = T>(cast: Cast<Extra, T>): Banditype<Extra>;
  or<Extra>(cast: Cast<Extra>): Banditype<T | Extra>;
}
export type Infer<Schema extends Cast<unknown>> = ReturnType<Schema>;

// factory
export const banditype = <T>(cast: Cast<T>): Banditype<T> => {
  const res: Banditype<T> = (raw: unknown) => cast(raw);
  res.and = (extra) => banditype((raw) => extra(cast(raw)));
  res.or = (extra) =>
    banditype((raw) => {
      try {
        return cast(raw);
      } catch (err) {
        return extra(raw);
      }
    });
  return res;
};

// error helper
export const fail = (message?: string): never => {
  throw new TypeError(message || "Banditype error");
};

// safe validation helper
export const is = <T>(value: unknown, schema: Banditype<T>): value is T => {
  try {
    schema(value);
    return true;
  } catch (err) {
    return false;
  }
};

// end types
export const never = () => banditype(fail);
export const unknown = () => banditype((raw) => raw);

// literals
export const literal = <T>(item: T) =>
  banditype((raw) => (Object.is(raw, item) ? (raw as T) : fail()));
export const literalUnion = <T>(items: readonly T[]) =>
  items.reduce((bt, item) => bt.or(literal(item)), never()) as Banditype<T>;

// empty
export const btNull = () => banditype((raw) => (raw === null ? raw : fail()));
export const btUndefined = () =>
  banditype((raw) => (raw === undefined ? raw : fail()));

// primitives
export const string = () =>
  banditype((raw) => (typeof raw === "string" ? raw : fail()));
export const number = () =>
  banditype((raw) => (typeof raw === "number" ? raw : fail()));
export const boolean = () =>
  banditype((raw) => (typeof raw === "boolean" ? raw : fail()));

// function
export const btFunction = () =>
  banditype((raw) => (typeof raw === "function" ? raw : fail()));

// objects
export const anyObject = () =>
  banditype((raw) =>
    raw && typeof raw === "object" ? (raw as Record<string, unknown>) : fail()
  );
export const object = <T extends Record<string, Banditype<unknown>>>(
  schema: T
) => {
  return anyObject().and<{ [K in keyof T]: Infer<T[K]> }>((safe) => {
    const res = {} as any;
    for (const key in schema) {
      res[key] = schema[key]!(safe[key]);
    }
    return res;
  });
};

// arrays
export const anyArray = () =>
  banditype<unknown[]>((raw) => (Array.isArray(raw) ? raw : fail()));
export const array = <Item>(castItem: Banditype<Item>) =>
  anyArray().and((arr) => arr.map(castItem));
export const tuple = <T extends readonly Banditype<unknown>[]>(schema: T) =>
  anyArray().and((arr) => {
    return schema.map((cast, i) => cast(arr[i])) as {
      [K in keyof T]: Infer<T[K]>;
    };
  });

// classes
export const instance = <T>(constructor: new () => T) =>
  banditype((raw) => (raw instanceof constructor ? raw : fail()));
