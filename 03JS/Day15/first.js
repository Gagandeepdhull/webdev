let user = {
    name :"rohit",
    age :20
}
console.log(Object.getOwnPropertyDescriptor(user,"name"))
Object.defineProperty(user,'name',{
    writable:false,
})
user.name = "mohit";
console.log(Object.getOwnPropertyDescriptor(user,"name"))

// for of loop
console.log("\n for of loop start");
const arr = [ 10,20,101,1301,12];
for(let value of arr){
    console.log(value);
}
// apply for of loop in string
console.log("\n for of loop start on string");
let str = "rohit is a good boy";
for(let value of str){
    console.log(value);
}

// for of loop not apply on object object is not iterable nhi h isko nhi pta ki next kha milega

for(let value of Object.keys(user))
    console.log(value,user[value]);

// for each 
console.log("\nforeach loop using call back function")
let arr1 = [ 10,20,30,40,50];
arr1.forEach(function(num){  // uses arrow function  : arr1.forEach((num,index)=>console.log(num,index)); 
    // single argu = number double argu = num and index triple argu = number index and array referencce
    console.log(num);
})

// filter
console.log("\nfilter function")
let arr2 = [10,20,33,44,55,57];
const result = arr2.filter((num)=>{
    return num%2==0;// donot write return and remove curly braces because call back function prints true or false
})
console.log(result);


const students = [
    {name:"rohit",age:20,marks:70},
    {name:"gagan",age:23,marks:40},
    {name:"to",age:26,marks:90},
    {name:"mohit",age:17,marks:60},
]
const res = students.filter((value)=>{
    return value.marks>50;
});

console.log(res);

// map
// difference between map and filter filter gives only true or false but map give modify value
console.log("\nmap function");
const arr3 = [10,20,30,11,13,15];
const resu = arr3.map((num)=>{
    return num*num
});
console.log(resu);

const arr4 = [1,2,3,4,5,6];
const resul = arr4.filter((num)=>num%2==0).map((num) => num*num);
console.log(resul);