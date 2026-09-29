// how create object
// object store in key value pairs but in array not define
// key stored as a string  if key give number is stored as a string
const obj = {
    name:"rohit",
    account_balance:420,
    gender:"male",
    age:21,
    undefined:30,
    null:"mohan"
}
console.log(obj);
console.log(obj.age);
console.log(obj["gender"]); // tells as a string means use comma
console.log(obj.undefined); 
console.log(obj[undefined]);

const inst ={
    insta_id:"gagandeep_dhull",
    insta_pass:"gagan"
}
console.log(inst);


const person = new Object(); // second method to create object
person.name="rohit";
person.age=20;
person.gender="male";
console.log(person);

delete person.age;  // delete an age
console.log(person);

person.name="mohit";// if exist this key modify the key else create 
console.log(person);

// third method to create object
class people{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let per1 = new people("rohit",20,"male");
let per2 = new people("mohit",21,"male");
let per3 = new people("meera",22,"female");
console.log(per1,per2,per3);

let obj1 = {
    name:"rohit",
    age:20,
    gender:"male"
};
const arr = Object.values(obj1); // give values as 1d array
console.log(arr);

const arr2 = Object.entries(obj1);  // gives as a key value as 2d array
console.log(arr2);

let obj2 = {a:1,b:2};
let obj3 = {c:3,d:4};
let obj4 = Object.assign({},obj2,obj3); // pass {}because changes show in 
console.log(obj4);

const obj5 = {...obj2,...obj3};
console.log(obj5);