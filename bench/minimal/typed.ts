import { type Struct, StructError, ok, err } from "typed";

console.log(
  (
    ((input) => {
      return input ? err(new StructError("", { input, path: [] })) : ok(input);
    }) as Struct<unknown>
  )(window[""])
);
