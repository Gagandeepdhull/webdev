// if else
let age = 30;
if (age >= 18) {
    console.log("eligible for vote");
}
else {
    console.log("not eligible");
}

// if else if else
// if else if else if else
// multiple condition  : switch
console.log("\nswitch start");
switch (new Date().getDay()) {

    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thrusday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log("not valid day");
}


console.log("\nloop start");
// loop 
for (let i = 0; i < 5; i++) {
    console.log("hello coder army");
}


console.log("\nloop sum program 1 to 10");
let sum = 0;
for(let i = 0;i<=10;i++){
    sum+=i;
}
console.log(sum);

// nested loop
for(let i = 1;i<=5;i++){
    for(let j = 1;j<=5;j++){
        console.log(j);
    }
    console.log("\n");
}

// while loop
console.log("\n while loop start")
let i = 1;
while(i<=6)
{
    console.log(i);
    i++;
}

// array aceess
console.log("\narray element access start")
let arr = [11,12,13,14,15];
for(let i = 0;i<arr.length;i++)
{
    console.log(arr[i]);

}

const obj = {
    name:"rohit",
    age:30,
    amount:340,
    city:"jind"
}
const key = Object.keys(obj);
for( let i =0;i<key.length;i++){
    console.log(obj[key[i]]);
    console.log(key[i]);
}