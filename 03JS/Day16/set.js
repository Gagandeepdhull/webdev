// set means unique value
//let arr = [1020,10,30,20];
const set1 = new Set([10,20,30,40,20,10])
console.log(set1);
console.log(typeof set1);

const set2 = new Set();
set2.add(4);
set2.add(2);
set2.add("rohit");

// delete
set2.delete(2);
console.log(set2.size);
console.log(set2);

const user_id = new Set(["rohit_negi","mohit_91"]);
let new_user = "rohit_negi";
console.log(user_id.has(new_user));
user_id.clear();
console.log(user_id);

// convert 
console.log("\n array to set ");
let arr = [10,20,30,20,40,10,50];
const set3 = new Set(arr); 
// arr = [...set3]
//console.log(arr);
console.log(set3);

// union
console.log("\n union ");
let set4 = new Set([10,20,30,40]);
let set5 = new Set([10,20,50,60]);
let set6 = new Set([...set4,...set5]);
console.log(set6);

// intersection
console.log("\nintersection ");
const res =[...set4].filter((num)=>set5.has(num));
console.log(res);

// iterate over set forof loop
console.log("\niterate using forof ");
for(let value of set4)
    console.log(value);

console.log("\niterate using forEach ");
set4.forEach((value)=>console.log(value));