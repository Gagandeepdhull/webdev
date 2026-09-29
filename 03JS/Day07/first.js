let num1 =231;
let num2 = new Number(231);
let num3 = new Number(231);
console.log(num2);
console.log(typeof num2);
console.log(num1 == num2); // true   if both datatype different it first convert than check
console.log(num2 == num3); // false  if both same than it check without convert due to heap address

let num =231.68;
console.log(num.toFixed(3)); // it give 3 num after point 680
console.log(num.toPrecision(4)); // it give total number 231.7  if 3 232
console.log(num.toExponential(2));
console.log(typeof num.toString());
console.log(num.valueOf());

// math
console.log(Math.E); //loge value
console.log(Math.LN10);
console.log(Math.PI);

console.log(Math.random());//0<=value<1
console.log(Math.random()*10);// 0 to 9 if we get  1 to 10 than +1 // if get 11 to 20 than add 11 //if get 0 to 10 than multiply 11
// console.log(Math.floor(Math.random()*(max-min+1)+min));

// floor and ceil
let num11 =23.9;
console.log(Math.floor(num11));
console.log(Math.floor(Math.random()*10));

console.log(Math.floor(Math.random()*(6-1+1)+1));
