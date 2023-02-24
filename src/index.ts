export type Banditype<T> = (data: unknown) => T;

export function fail(message?: string): never {
  throw new TypeError(message || "BandiType error");
}

const primitive = <T>(tag: string): Banditype<T> => data => typeof data === tag ? data as T : fail();
export const string = primitive<string>('string');
export const number = primitive<string>('number');
export const boolean = primitive<boolean>('boolean');

export const object: Banditype<object> = (raw) => raw && typeof raw === 'object' ? raw : fail();
export const array: Banditype<unknown[]> = raw => Array.isArray(raw) ? raw : fail();
