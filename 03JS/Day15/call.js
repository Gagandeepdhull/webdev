// call back function
function name(fun){
    console.log("hello my name");
    fun();
}
function greet(){
    console.log("i am a call back function")

}
name(greet);
function fetchdata(){
    console.log("I am fetching data");
}
setInterval(fetchdata, 500);
