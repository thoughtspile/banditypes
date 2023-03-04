import { banditype, fail } from "../../src";

console.log(banditype((raw) => (raw ? fail() : raw))(window[""]));
