// primitive data type
const num =10;
//num  = 20 ;  // shows error due to const
console.log(num);

const obj = {
    id:10,
    balance:200
};
obj.id = 11;
console.log(obj);
let obj2 = {
    id:20,
    money:30
};
//obj = obj2; // shows error due to const it copy address not value due to obj const it not change address


// string in javascript

let str1 = "hello coder army";
let str2 = 'm toh mast hu';
let str3 = `aur kaise ho`;

let price = 50;
console.log(`price of tomato is ${price}`);
console.log("price of tomatato",price, "and get it asap");
console.log(str1,str2,str3);

// string concatenation
let s1 = "hello";
let s2 = "coder";
let s3 = s1+s2;
console.log(s3);
console.log(s3.length);
console.log('"hello coder army"');    // print comma also
let message =  "rohit bhai\naur gagan bhai";   // next line
console.log(message);
let messag =  "rohit bhai\\naur gagan bhai";   // escape character
console.log(messag);
let special = "Rohit";
console.log(special[0]);
console.log(special.charAt(3));
console.log(special.toLowerCase()); // it give new string not change original
console.log(special.toUpperCase()); // it give new string not change original

let hero = "hello coder army coder";
console.log(hero.indexOf("coder"));  // check first it present than give index 
console.log(hero.lastIndexOf("coder")); // it gives last inex of coder present in string
console.log(hero.includes("coder"));

let newstring = "HeloDon";
console.log(newstring.slice(1,3));    // slice  can take negative index from last 
console.log(newstring.substring(0,3)); // not use negative index

let str110 = "hello ji kaise ko";
console.log(str110.replace("ji","money"));  // it replace ji with money only first word
console.log(str110.replaceAll("ji","money")); // it replace all ji

let str11 = "Money, honey,sunny,funny";
console.log(str11.split(",")); // it conert array on basis of ,

let str12 = "   hello ji";
console.log(str12);
console.log(str12.trim()); // remove starting ending space

// new way to create string
let lateststring = new string("hello coder army");  // using new keyword it can store in heap memory
console.log(lateststring); // it can show typeof is object
console.log(typeof lateststring); 
