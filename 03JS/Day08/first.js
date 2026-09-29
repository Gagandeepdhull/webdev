const arr = [2,35,1,8,9,"rohit"];
console.log(arr);
console.log(arr.length);  // give length of array
console.log(arr[0]); // it can't take negative index
console.log(arr[1]);
console.log(arr.at(1)); // give elment present at index it can take negative index
const newarr = arr;
console.log(newarr);

const newar = structuredClone(arr); // it can create structure same but different location
console.log(newar == arr);

arr.push(30); // add element at end
arr.push(50);
console.log(arr);

arr.pop(); // remove last element
arr.pop();
console.log(arr);

arr.unshift(10); // add elment at start
arr.unshift(20);
console.log(arr);

arr.shift(); // remove first element
console.log(arr);

//delete arr[0]; // it can delete but create an empty space
console.log(arr);

console.log(arr.indexOf(8));// it can tell first occuring of 8
console.log(arr.lastIndexOf(8));  // last occuring

console.log(arr.includes(10)); // tells present h or nhi

console.log(arr);
console.log(arr.slice(2,5));// not include ending and not change in original array

console.log(arr);
console.log(arr.splice(2,5));  // starting index  s total element delete   add element if pass in   // it can change in original array
console.log(arr);

console.log(arr.toString);
console.log(arr.join("*")); //it convert to string but separate by *

let arr1 = [2,34,6,11];
let arr2 = [5,12,19];
let arr4 = [20,23,24,2,4];
//let arr3 = arr1.concat(arr2,arr4);
//console.log(arr3);

arr1.push(arr2);  // array k ander array ko dal deta h
console.log(arr1); // it can into 2d array
console.log(arr1[4][1]);

// 2d array
let arr2d = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr2d[0]);
console.log(arr2d[0][2]);
let newarr1 = arr2d.flat(); // convert into 1d array ,if pass elemnt in flat it goes upto and convert, 1 for 2d ,2 for 3d ,so write infinity

//3dd array
// [1,2[4,5],[6,7,8]]
// how print arr[0][2][0] = 4

let abc = [2,1,4,1];
console.log(Array.isArray(abc)); // to check is an array

let ac = new Array(2,22,23,34); // if pass single vaalue it gives length
console.log(ac); 




