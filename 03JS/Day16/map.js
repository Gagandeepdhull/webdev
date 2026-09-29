// map collection of key and value pair key can be anything but in object key is string
const map1 = new Map();
map1.set(3,90);
map1.set("rohit",45);
map1.set(20,"mohan");
map1.set("rohit",45);
console.log(map1); // if key repeat it change the value

// delete
console.log("\ndelete from map")
map1.delete(3);
map1.delete(20);
console.log(map1);

console.log("\ncheck has present in map")
// has 
console.log(map1.has("rohit"));

console.log("\n map size")
// size
console.log(map1.size);

console.log(map1);

// clear
map1.clear();
console.log(map1);

console.log("\ndifferent way to create map")
// diiferent way to create
const map2 = new Map([
    [4,"rohit"],
    ["mohan","sohan"],
    [30,9]
]);
console.log(map2);

console.log("\nforof loop in map")
// for of loop 
for(let [key,value] of map2)
    console.log(key,value);