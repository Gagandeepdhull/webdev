// declare the variable
let num = 10;
console.log(num);

// primitive data type
// number,boolean,string,null,undefined,symbol,bigint

// number  typeof = number
let account_balance = 30;
console.log(typeof account_balance);

// string  typeof = string
let str = "rohit";
console.log(str);
console.log(typeof str);

let comment = 'hello dosto'
console.log(comment)

// boolean true or false  typeof = boolean
let statement = true;
console.log(statement);

// undefined  typeof = undefined
let account;
console.log(account);

// null  typeof = object
let bal = null;
console.log(bal);

// bigint ending with n
let a = 2453764736486584759n;
console.log(a);

// 64 bit 1signbit 11bit expotent 52bit mantissa
// 2^63-1 not 2^53-1 max  yes ex 2^3-1 = 7 max integer
// 42.75 = 101010.11 binarynform = 1.0101011 * 2^5  add  1023+5   is an expotent form point k bad ki mantissa  if need end with 0
// .75 *2 = 1.5
// .5 *2 = 1.0
// .0 *2 = 0
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


