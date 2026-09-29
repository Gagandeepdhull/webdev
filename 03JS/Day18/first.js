// this keyword in javascript is a special keyword that refers to 
// the context in which the current node is being executed
// its value depend on how the function where this is used called.

// 1. Global context (outside any function)
// in browser : window
// in Node js : Module's export object

// 2. inside a function
//i:non strict mode
// when this is used inside a  regular function,it refers to the global object
//ii: strict Mode
// this will be undefined inside a function

//3.Inside a method (object context)
// when this is used inside an object's method ,it refers to the object that

// Arrow function don't have their own this
// Instead,they inherit this from the surrounding (lexical ) scope.

// inside a constructor or class
// in constructor and classes this refers to the instance of the object being created





//----global object : object ----
// browser chrome:window
// node js : global
// write globalthis everywhere to access or say its unique 
console.log("hello world");
console.log(Math.random());
console.log(20);
// setInterval();
// new object();
// new string("rohit");




// 2. inside a function
//i:non strict mode
// when this is used inside a  regular function,it refers to the global object
//ii: strict Mode
// this will be undefined inside a function
let a = 10;
const b = 20;
var c =30;
console.log(this);
// console.log(this==window);
console.log(this.c);

function greet(){
    console.log(this);
}
greet();
//window.greet();
// "use strict" means define ki let h const h var h




//3.Inside a method (object context)
// when this is used inside an object's method ,it refers to the object that
 const obj = {
    name:"rohit",
    age:20,
    great : function(){
        console.log(this);
        console.log(this.name);
    }
 }
 obj.great();



 // Arrow function don't have their own this
// Instead,they inherit this from the surrounding (lexical ) scope.
let obj2 = {
    name:"mohit",
    age:21,
    gret: ()=>{
        console.log(this);
    }
}
obj2.gret();



let obj1 = {
    name:"mohit",
    age:21,
    greeet:function(){
       let ab = ()=>{
        console.log(this);
    };
    ab();
}
}
obj1.greeet();


// inside a constructor or class
// in constructor and classes this refers to the instance of the object being created
class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
let ac= new person("rohit",20);
console.log(ac);


// let and const are not part of global object they are part of block object

