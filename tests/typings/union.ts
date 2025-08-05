import { object, string, enums } from "#lib";
import { expectTypeOf } from "expect-type";

expectTypeOf(
  object({ a: string() }).or(object({ b: string() })),
).returns.toEqualTypeOf<{ a: string } | { b: string }>();

// Maximum call stack of 40 items
expectTypeOf(
  enums(["1"])
    .or(enums(["2"]))
    .or(enums(["3"]))
    .or(enums(["4"]))
    .or(enums(["5"]))
    .or(enums(["6"]))
    .or(enums(["7"]))
    .or(enums(["8"]))
    .or(enums(["9"]))
    .or(enums(["10"]))
    .or(enums(["11"]))
    .or(enums(["12"]))
    .or(enums(["13"]))
    .or(enums(["14"]))
    .or(enums(["15"]))
    .or(enums(["16"]))
    .or(enums(["17"]))
    .or(enums(["18"]))
    .or(enums(["19"]))
    .or(enums(["20"]))
    .or(enums(["21"]))
    .or(enums(["22"]))
    .or(enums(["23"]))
    .or(enums(["24"]))
    .or(enums(["25"]))
    .or(enums(["26"]))
    .or(enums(["27"]))
    .or(enums(["28"]))
    .or(enums(["29"]))
    .or(enums(["30"]))
    .or(enums(["31"]))
    .or(enums(["32"]))
    .or(enums(["33"]))
    .or(enums(["34"]))
    .or(enums(["35"]))
    .or(enums(["36"]))
    .or(enums(["37"]))
    .or(enums(["38"]))
    .or(enums(["39"]))
    .or(enums(["40"])),
).returns.toEqualTypeOf<
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "28"
  | "29"
  | "30"
  | "31"
  | "32"
  | "33"
  | "34"
  | "35"
  | "36"
  | "37"
  | "38"
  | "39"
  | "40"
>;
