// input  keybooard s input 
// change  focus bahr chla jaye
// focus doesnot bubble  if need use focusin
// blur doesnot bubble use  focusout
// click 
// dblclick
// submit 
// reset  html button m type reset 
// 


const form = document.querySelector('form');
// form.addEventListener('click',(event)=>{
//    // console.log(event.target.id);
//      console.log(event.target.value);
// })

 form.addEventListener('submit',(event)=>{
    event.preventDefault();  // prevent from refresh

    // const first =  document.getElementById("first");
    // console.log(first.value);

    // const second =  document.getElementById("second");
    // console.log(second.value);

    // const third =  document.getElementById("third");
    // console.log(third.value);

    const data = new FormData(form);

    for(let [key, value]of data.entries())
        console.log(key,value);

    // console.log(Array.from(data.keys()));
    // console.log(Array.from(data.values()));


    // const result =  document.getElementById('result');
    // result.innerText = `${first.value}  ${second.value} is a good boy`;

    document.body.append(result);
})
