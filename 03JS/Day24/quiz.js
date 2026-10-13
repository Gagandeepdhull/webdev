
// const original_answer = ["sachin tendulkar","west indies","sachin tendulkar" ,"264","muttiah muralitharan"]
const original_answer = {q1:"sachin tendulkar",
                         q2:"west indies",
                         q3:"sachin tendulkar",
                         q4:"264",
                         q5:"muttiah muralitharan"
                        }
const form = document.querySelector('form');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data  = new FormData(form);
    // const answer = Array.from(data.values());
    // // console.log(answer);
    // let result = 0;
    // for(let i = 0;i<answer.length;i++){
    //     if(answer[i]==original_answer[i])
    //         result++
    // }
    // console.log(result);

    let result = 0;
    for(let [key,value] of data.entries()){
        if(value==original_answer[key])
            result++;
    }

const out = document.getElementById('out');
out.innerText = `${result} out of 5 is correct`;
// document.getElementById('container').append(out);
})