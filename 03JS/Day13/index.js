// global scope local sccope(functinal scope) block scope

let a = 10;
var b = 20;  // global scope  access everywhere
const c = 30;

function greet() {
    console.log(a);
    console.log(b);
    console.log(c);
}
greet();
function great(){
    let a = 10;
    var b = 20;  // local  scope  access only in function
    const c = 30;
    console.log(a,b,c);
}
great();

if(true){
    let a = 10; 
    var b = 20;  // block scope  access only in block  {}  var can acces outside the block so var cannot block scope
    const c = 30;
}