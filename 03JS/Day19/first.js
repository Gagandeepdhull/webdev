// Dom : Document object model 
 
//the Dom is a way to represent a web page so that program (like javascript )can interact with it.
// A browser takes your HTML document and turns it into the Dom.
// with the object model, Javascript gets all the power it needs to create dynamic HTML;
// 1. Java script can change all the HTML element in the page
// 2. Java script can change all the HTML attributes in the page
// 3. Java script can change all the CSS style in the page
// 4. Java script can remove existing HTML element and attributes
// 5. Java script can add new HTML element and attributes
// 6. Java script can react to all existing HTML events in the page
// 7. Java script can create new HTML events in the page

// a: Accessing by ID:
// Method : document.getElementById(id)
// Description : retrieves a single element with the specified id attribute.

// b: Accessing by ClassName:
// Method : document.getElementByClassName(className)
// Description : returns a Live HTML collection of all element with the specified class name.

// c: Accessing by CSS Selectors:
// 1. Single element:
// Method: document.querySelector(selector)
// description: returns the first element matching the specified CSS selector.

// ii:Multiple Elements:
// Method: document.querySelectorAll(selector)
// discription: returns a static Nodelist of all elements matching the specified CSS selector

// d: Accessing by Tag Name
// Method: document.getElementsByTagName(tagname)
// description: Returns  live HTML collection of all elements with the specified tag name(e.g , div,h1,p)


// e: Acessing using Relationships
// i: Parent Node:
// Method : element.parrentNode or element.parentElement
// Description: Acess the immediate parent of an element.

// ii:child Nodes :
// Method: element.childNodes(include text nodes)or element.children (only element nodes)
// Description: access all child nodes of an element

// iii: First and last child:
// Methods: element.firstchild,element.lastchild,
//           element.firstElementChild,element.lastElementChild


// iv : sibling Nodes:
// Methods: element.nextsibling,element.previousSibling
// Element Sibling: element.nextElementSibling, element.previousElementSibling



document.getElementById('first').innerHTML="hum acche  "
// const obj  = document.getElementById("first");
// obj.id= "mohan";