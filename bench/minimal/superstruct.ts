import { create, define } from "superstruct";

console.log(define('', (value) => !value || '').create(window['']));
