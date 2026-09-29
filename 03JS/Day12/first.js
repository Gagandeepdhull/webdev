// function

function greet() {

    console.log("hello  coder army");
    console.log("mein kaisa hu");
    console.log("aur kya chal rha");

}
greet();
greet();

console.log("\nfunction add program");
// add program
function add(num1,num2){
    console.log(num1+num2)
};
add(3,4);  // function call : argument


console.log("\nfunction multiply program");
function multiply(num1,num2){
    return num1*num2;
}
console.log(multiply(4,5));


console.log("\nfunction how create ");
const fun  = function(){
    console.log("gagandeep dhull");
    //return money;
}
fun();

console.log("\narrow function");
const fin = ()=>{
    console.log("hello coder");
}
fin();

console.log("\narrow function sum");
const sum = (num1, num2)=> num1+num2;
console.log(sum(3,4));

console.log("\narrow function multiply");
const cube = number => number*number*number;
console.log(cube(3));

console.log("\nwhen many no of parameter function ");
const summ = function(...number){
    // for loop s sum nikal skta h
    console.log(number);
}
summ(2,3,4);
summ(3,4,4,5,6,7);

console.log("\nobject function use");
let obj = {
    name:"rohit",
    amount:420,
    age:21
}
function fon (obj){
    console.log(obj.name,obj.amount);
}
// function fun (name , amount){
//     console.log(name,amount);    destructure means jo chayie woh mil jaye
// }
fon(obj);

