let obj ={};
obj.name = "rohit";
// key value writeable enumerable configurable
console.log(Object.getOwnPropertyDescriptor(obj,'name'));
// writeable = true  means value ko change kr skte h
obj.name = "mohit"
// configurable = true means writable or enumerable ki value ko change kr skte h if false means not change 
Object.defineProperty(obj,'name',{
    writable:false,
})
obj.name = "mohit";
console.log(obj.name);
// for key in kro g tbb enumerable jis key ka true hoga tb print hoga even jo inherit hoke aayegi

// array k sath for in loop use nhi krte 
// 0:1,
// 1:10,
// 2:24,
// 3:30,
// name:"rohit"
// age:20 
// so name and age not key in array it an number