// access by css element
 const id = document.querySelector('#first');
 id.innerHTML= "hello money";
 const id2 = document.querySelector('.header2');
 id2.style.backgroundColor="pink";


  // How to iterate over node list

// const obj = document.querySelectorAll('.header1')

// 1. obj.forEach((val)=>{
//        console.log(val)
//      })


// 2: for(let val of obj)
//        console.log(val)

// 3: for( i=0;i<Object.length;i++){
//     obj[i].style.color = "red";
//      }

// convert nodelist into array
// Array.from(obj)




// ----- --
const obj1= document.getElementsByTagName('h1');
console.log(obj1);

const team= document.getElementsByTagName('l1');
 // How to iterate over it 
 // 1: for( let i=0;i<team.length;i++){
//     team[i].style.color = "blue";
//      }

// 2: for(let val of team)
//        console.log(val)


// 3. Array.from(team).forEach((val)=>{
//        console.log(val)
//      })



//---------------------
const list = document.querySelector('li');
console.log(list.parentElement);
console.log(list.parentNode);

const par = document.querySelector('ul');
console.log(par);
console.log(par.childNodes);// text nodes
console.log(par.children); // html element only

console.log(par.firstChild); // give first text child
console.log(par.firstElementChild); // give html element first child


// innerHTML     // give all present in that tag
// textcontent   // give only text
// inner text    // give only that visible in screen

// h1  'hello coder <strong style = "display : none;">army</strong>'  h1