# Banditypes — the mighty 400-byte validator

Check if data conforms to a TS type at runtime — much like [zod,](https://zod.dev/) [yup](https://github.com/jquense/yup) or [superstruct](https://docs.superstructjs.org/), but in a tiny 400-byte package. Despite the small size, it's not a toy:

- Mostly API-compatible with the established libs.
- Passes the relevant superstruct test suite.
- Supports _both_ deriving TS types from schema _and_ declaring a schema for an existing TS type.
- Full-featured built-in types: maps, sets, tuples, literals and generic union types.
- User-defined types, refinements and conversions.

Banditstash is a 400-byte lib, tradeoffs have been made:

- _No_ detailed errors with messages and paths, just a throw in a predictable location.
- _No_ built-in refinements (empty / integer / etc).
- Built for browsers with ES2018 support: ...spread, arrows. Can be transpiled further down.
- Validation and conversion are mangled, so you have to use the returned object and "pure validation" is impossible.
- Some syntax might be a bit odd.

This is not a library for everybody, but it gets the job done, and it's small. Here's a usage example:

```ts
import { assert, object, number, string, array, optional, fail, Infer } from 'banditypes'

const parseGunslinger = object({
  name: string(),
  kills: number(),
  guns: array(string()),
  born: object({
    state: string().or(optional()),
    year: number().map(n => Number.isInteger(n) ? n : fail()),
  }),
})

type Gunslinger = Infer<typeof parseGunslinger>;

const raw = JSON.parse(`{
  name: 'Dirty Bobby',
  kills: 17,
  guns: ['Colt 45'],
  born: {
    state: 'Idaho',
    year: 1872
  }
}`)
try {
  const data = Gunslinger(raw)
} catch (err) {
  console.log('invalid JSON')
}
```

400 bytes is an _approximate_ gzip bundle increase from using _all_ built-in validations. It may vary based on the minifier and the amount of validations used. A typical usage (primitives + object + array) is closer to 200 bytes, the core is around 100. Find out more about the [measurement technique.](#size-measurement)

If you like banditypes, check out [banditstash](https://github.com/thoughtspile/banditstash) — a tiny localStorage wrapper with runtime validation and plugin system.

## Install

```sh
npm install --save banditypes
```

## Types

banditypes includes all the types you'd expect in a validation library:

```ts
// primitives
string()
number()
boolean()

// always fails
never()
// always passes
unknown()

// instanceof check
instance(MyClass)

object({
  key: string(),
  // nullable field
  nullable: string().or(nullable()),
  // optional field
  maybe: string().or(optional()),
})
// number[]
array(number())
// Record<string, boolean>
record(boolean());

// Set<number>
set(number())
// Map<number, boolean>
map(number(), boolean())
// [number, string]
// NOTE: "as const" must be used
tuple([number(), string()] as const)

// value comes from a set
enums([1, 2]); // infers 1 | 2
// mixed-type enums are OK:
enums([true, 0, '']);
// literal type is a single-value enum:
enums([42])
```

Every validator is just a function that returns the argument if it passes validation _or_ throws:

```js
const yes = string()('ok');
const no = string()(0);
```

- Non-primitive validators always clone the data passed. 
- `object` will also strip the keys not defined in the schema — to pass-through undeclared keys, use `objectLoose`.
- `tuple` trims the undeclared tail of the array.
- Object keys where validation returns `undefined` are stripped.
- strict object / tuple validations (throw on undeclared keys)

## Operators

As a luxury treat, every banditype has two methods: `map` for conversion and refinement, and `or` to make union types. I could strip around 17 bytes by turning these into functions, but I think it would make the library much less pleasant to use.

### or

`type1.or(type2)` passes input throuh `type2` _if_ `type1` fails. Useful for union types...

```ts
const schema = string().or(number());
schema(0) // ok
schema('hello') // ok
schema(null) // throws
type S = Infer<typeof schema>; // string | number
```

...nullable or optional types...

```ts
// string | undefined
const optionalString = string().or(optional());
// string | null
const optionalString = string().or(nullable());
```

...and default values — note that it is applied on every validation error, not just on missing values:

```ts
const defaulted = string().or(() => 'Manos arriba');
defaulted('hello') // 'hello'
defaulted(null) // 'Manos arriba'
defaulted({ hello: true }) // 'Manos arriba'
```

### map

`banditype.map` can be used for type refinement: run the check and return the value if it passes, or `fail()`:

```ts
const nonemptyString = string().map(s => s.length ? s : fail());
const date = instance(Date).map(date => Number.isNaN(+date) ? fail() : date);
```

Or to convert the type to another type:

```ts
const sum = array(number()).map(arr => arr.reduce((acc, x) => acc + x, 0));
sum([1,2,3]) // -> 6
sum(['1', '2', '3']) // throws
const strFromNum = () => number().map(String);
strFromNum(9) // -> '9'
strFromNum('9') // throws
```

You _could_ use it as an intersection type, but not that inferred type is always the type of the final cast, _not_ the intersection:

```ts
const ab = objectLoose({ a: string() }).map(objectLoose({ b: string() }))
type AB = Infer<typeof ab> // { b: string }
```

## Cast functions

The central concept of banditypes is cast functions — they accept `unknown` argument and return a value of type `T` or throw. These are all string-cast functions:

```ts
const isString = (raw: unknown) => 
  typeof raw === 'string' ? raw : fail();
const isNonemptyString = (raw: unknown) => 
  typeof raw === 'string' && raw.length > 0 ? raw : fail();  
```

But so are these:

```ts
const toString = (raw: unknown) => String(raw);
const toJson = (raw: unknown) => JSON.stringify(raw);
```

banditypes let you use custom cast functions as arguments to collection types:

```ts
const tag = Symbol()
object({
  // unique symbol check
  tag: x => x === tag ? x : fail()
})
// array of falsy values
array(raw => !raw ? raw : fail())
```

Wrapping a cast in `banditype()` appends `.map` and `.or` methods, giving you a custom chainable type (note that the function you pass is mutated):

```ts
const mySheriff = banditype<MySheriff>(raw => MySheriff.isSheriff(raw) ? raw : fail());
const angrySheriff = mySheriff.map(s => s.isAngry ? s : fail());
```

## TS-first schemas

Unlike _some_ validation libraries, banditypes work with pre-defined TS schemas:

```ts
interface Bank {
  name: string;
  money: number;
}
const bankSchema = object<Bank>({
  name: string(),
  money: number(),
})
```

Very handy if your types are code-generated from GraphQL.

## Size measurement

The 400-byte size reported assumes 5-pass terser and gzip. Brotli is slightly smaller, `esbuild` minification is slightly larger, but overall banditypes is a very very small library, I don't think you can go much smaller. If you have any ideas on how to decrease the size further (_without_ throwing away the chainable API) — let me know!

I use an unconventional (but sensible) approach to size measurement. Instead of measuring the gzip size of the library bundle, I bundle two versions af a "sample app" — one without validation, one with added banditypes. This avoids measuring stuff that won't actually affect the bundle size:

- `export` keywords and names — lib module is usually inlined, and export names mangled.
- 22-byte gzip End of Central Directory Record that's present in every gzipped file, and your app already has it.
- repetitions of common JS syntax like `=>` or `const`

But it also measures the code for integrating the library into user code (shhema definitions and actual validation), preventing me from party tricks that remove functionality from library core and make the user implement it manually. Otherwise you could say "Oh I made a 0-byte library, but you have to check all the types yourself". We optimize the overall bundle size when using the lib, not the lib size itself.

This technique also allows to measure bundle size with different subsets of functionality used (all validations; only primitives and objects; only core), and with different minifiers  minifier settings. This lets you optimize tree-shaking and dead code elimintaion.

This is a great approach, especially for smaller libraries. Check out the samples and code in [`/bench`](./bench/)

## Acknowledgements

[Superstruct](https://github.com/ianstormtaylor/superstruct) was a major influence on banditypes with its modular design  — shout out to [Ian Storm Taylor](https://twitter.com/ianstormtaylor) and all the contributors. I also borrowed superstruct's test suite.

[Typed](https://github.com/brielov/typed/) by [Gabriel Vaquer](https://twitter.com/brielov) is another tiny validator that showed me it _is_ possible to deliver the same feature set in a minimal package.

## License

[MIT License](./LICENSE)
