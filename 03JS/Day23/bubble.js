const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// event bubbling and event capturing
// addEventListener(first_event,useCallback,capture);  capture = true means capturing chalega default bubbling or false 
child.addEventListener('click',()=>{
    console.log("child clicked");
},false)
parent.addEventListener('click',()=>{
    // event.stoppropagation(); 
    console.log("parent clicked");
},true)
grandparent.addEventListener('click',()=>{
    console.log("grandparent clicked");
})


// event delegation
