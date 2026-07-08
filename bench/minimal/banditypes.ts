import { banditype, fail } from "banditypes";

console.log(banditype((raw) => (raw ? fail() : raw))(window[""]));
