// non primitive data types
// array object function 
let n = 10;
let  n2 = 20;

let arr = [10,20,30,"rohit"];
// typeof array is object
console.log(arr);
console.log(typeof arr);

// object
let obj ={ user_name: "rohit",
            account_no: 29339089,
            balance:420
}
console.log(obj);


// function
let fun = function(){
    console.log("hello coder");
    return 10;
}
fun();
console.log(fun());
console.log(typeof fun);

// type conversion 
let accunt_balance = "100";
let num = Number(accunt_balance);

console.log(typeof accunt_balance);
console.log(typeof num);

// boolean convert to number
let x = true;
console.log(Number(x));

let account = "100xs"
console.log(Number(account));

let balance = "200s"
console.log(Number(balance));

// null
let x1 = null;
console.log(Number(x1));

// undefined
let x2;
console.log(Number(x2));

// string k andar connvert
let ab = 20;
console.log(String(ab)); // 20

let ax = true;  // isko boolean
console.log(typeof true);
console.log(String(ax));   // true is an string "true"

// boolean
let abc = "dkdshhhkdhk" // if string empty false else true
console.log(Boolean(abc));

// operators
console.log(6*3+18/6-9);
// divide multiply left to right
// add sub left to right

// ++ increment operator -- decrement operator
let sum = 20;
sum++
console.log(sum);
