import { tuple, string, number, enums } from "$lib/index.js";
import { expectTypeOf } from "expect-type";

expectTypeOf(tuple([string(), number()] as const)).returns.toEqualTypeOf<
  [string, number]
>();

// Maximum call stack of 41 items
expectTypeOf(
  tuple([
    enums(["1"]),
    enums(["2"]),
    enums(["3"]),
    enums(["4"]),
    enums(["5"]),
    enums(["6"]),
    enums(["7"]),
    enums(["8"]),
    enums(["9"]),
    enums(["10"]),
    enums(["11"]),
    enums(["12"]),
    enums(["13"]),
    enums(["14"]),
    enums(["15"]),
    enums(["16"]),
    enums(["17"]),
    enums(["18"]),
    enums(["19"]),
    enums(["20"]),
    enums(["21"]),
    enums(["22"]),
    enums(["23"]),
    enums(["24"]),
    enums(["25"]),
    enums(["26"]),
    enums(["27"]),
    enums(["28"]),
    enums(["29"]),
    enums(["30"]),
    enums(["31"]),
    enums(["32"]),
    enums(["33"]),
    enums(["34"]),
    enums(["35"]),
    enums(["36"]),
    enums(["37"]),
    enums(["38"]),
    enums(["39"]),
    enums(["40"]),
    enums(["41"]),
  ] as const),
).returns.toEqualTypeOf<
  [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
  ]
>;
