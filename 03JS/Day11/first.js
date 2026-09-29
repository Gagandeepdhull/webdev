let obj1 ={
    a:1,
    b:2
}

let obj2 = obj1;
// shallow copy by reference  changes in one also change in other
obj1.a=10;
console.log(obj2,obj1);

// deep copy not change in original
let obj3 = structuredClone(obj1);
obj3.a=20;
console.log(obj3,obj1);

// nested object
const user = {
    name:"rohit",
    balance:420,
    address:{
        pincode:126102,
        city:"jind"
    }
}
console.log(user.address.pincode);

const user2 = Object.assign({},user);
console.log(user2);
user2.address.pincode = 124001;
user2.name = "mohit"  // not nested object k liya deep copy
console.log(user.address.pincode);  // nested object k liye shallow copy
console.log(user.name);

// destructuring of an object
let obj = {
    name:"rohit",
    money:430,
    balance:30,
    age:20
};
const{name: fullname,balance}= obj; // change name  = fullname so fullname s hi access hoga
console.log(fullname,balance);

const arr = [3,2,1,5,10];
//const[first, second, , third]= arr;
const [ first,second,...third]=arr;
console.log(first,second,third);

let obj10 = {
    name:"rohit",
    money:430,
    balance:30,
    arr:[3,2,1,4,5],
    age:20,
    address:{
        pincode:126102,
        city:"jind"
    }
};
const {name} = obj10;
console.log(name);

const {address:{pincode}} = obj10;
console.log(pincode);

const{arr: [firs]}= obj10;
console.log(firs);

let user1 = {
    name:"rohit",
    amount:420,
    greet:function(){
        console.log("hello coder army");
    },
    meet: function(){
        return 20;
    }
}
user1.greet();
console.log(user1.meet());

//  array element  -> arr.__proto__ ->  push pop ->  array.prototype -> to string    object.prototype

let arr12 =[110,20,30,40,50];
console.log(arr12.__proto__ == Array.prototype);
console.log(arr12.__proto__.__proto__ == Array.prototype);
console.log(arr12.__proto__.__proto__.__proto__== null)