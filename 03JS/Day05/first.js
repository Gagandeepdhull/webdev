let a = 10;
let b = a;
console.log(b);
// primitive data type vs non primitive data type
// primitive data type : immutable
// non primitive data type : mutuable

// object example
let obj1 = {
    id:20,
    naming : "rohit"
}

let obj2 = obj1;
obj2.id = 30;
console.log(obj1);
console.log(obj2);
