// <---------create Node---------->
// 1: create a element
// 2: create a Text Node
// 3: create a Attribute Node


// <----------Accessing attributes------->
// 1: getAttribute 
// 2: setAttribute
// 3: removeAttribute

// <---- add nodes to the Dom----->
// 1: appendChild(node)  add a node as the last child of a parent.
// 2: append(node1,node2,...) adds multiple node as the last child of a parent.
// 3: insertBefore(newNode , referenceNode)
// 4: prepend
// 5: replaceChild()
// 6: usng innerHTML  directly sets the HTML content of an element
// 7: using insertAdjacentHTML() or insertAdjacentElement();
// beforebegin: before the element itself.
// afterbegin : inside the element, before its first 
// beforeend : inside the element,after the last child
// afterend : after the element itself.
// 8: removeChild(node)
// 9: the .remove() method in javascript is used to remove an element


// <li>ts</li>

// created an element
function attach(content){
const element = document.createElement('li');
element.innerHTML = content;

const element2 = document.createElement('li');
element2.innerHTML = content+"v2.0";

const parent = document.getElementById("root");

// appendChild(node)  add a node as the last child of a parent.
parent.appendChild(element); // one element attach only

// append(node1,node2,...) adds multiple node as the last child of a parent.
parent.append(element,element2); // multiple elements
};
attach("TS");
attach("react");



//----- create a text node---------
const elemen = document.createTextNode("hello coder army");
const paren = document.getElementById("root");
paren.append(elemen);


//------ create a attribute node----------
const eleme = document.createAttribute("id");
eleme.value = "first";

// access to first list
const curr_list = document.querySelector('li');
curr_list.setAttributeNode(eleme);

// access to second list
const par = document.getElementById("root");
// console.log(par.children);
console.log(par.children[0]);// access first list
console.log(par.children[1].setAttributeNode(eleme));

// -----------Acessing attribute--------
const ele = document.getElementById("root");
console.log(ele.getAttribute("style"));
ele.setAttribute("custom","20");
ele.setAttribute("class","rohan");
ele.removeAttribute("custom");

// <---- add nodes to the Dom----->
const parentt =  document.getElementById("root");
const elementt = document.createElement('li');
elementt.innerHTML="TS";
parent.prepend(elementt); // sabse aage add ho jayega
parent.append(elementt); // last m
 
const child2 = parent.children[1];
parent.insertBefore(elementt,child2); // before element 

parent.replaceChild(element,child2); // replace


// adding element using innerHTML 
const parenttt =  document.getElementById("root");
parenttt.innerHTML += "<li>ts</li>";


// add element before element and after and its child
const parent = document.getElementById("root");
const element = document.createElement('div');
element.innerHTML = "hello coder army";

parent.insertAdjacentElement("beforebegin", element);
parent.insertAdjacentElement("afterend", element);
parent.insertAdjacentElement("afterbegin", element);
parent.insertAdjacentElement("beforeend", element)

//delete node or element
document.querySelector('li').remove();

