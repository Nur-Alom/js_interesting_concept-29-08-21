/*
  Data Types.
    Primitive Types.->
 1. -> -> number.
 2. -> -> string.
 3. -> -> boolean.
 4. -> -> undefined.
 5. -> -> null.
 7. -> -> symbol.

     Non-Primitive Types.->
 6. -> -> object.
*/

let a = 'hello'
let b = a;

a = 'gelo';
console.log(a, b);

const x = { job: 'web-developer' };
const y = x;
console.log(x, y);
x.job = 'front end developer';
console.log(x, y);


