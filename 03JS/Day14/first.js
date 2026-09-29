let obj = {
    name:"aman",
    age:23,
    gender:"male",
    city:"jind"
}
for(let key in obj){
    console.log(key, obj[key]);
}
// console.log(object.keys(obj));

let obj2 = Object.create(obj);
obj2.money = 420;
obj2.id = 1;
console.log(Object.keys(obj2)); // only mention not show inherit key
for(let key in obj2){
    console.log(key); // print all key other say show inherit also
}