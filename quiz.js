const quizlist=[
    {
        quizname:"what is the difference between flutter and Kotlin",
        a:"xkfjlsjflsjfs",
        b:"xkfjlsjflsjfs",
        c:"xkfjlsjflsjfs",
        d:"xkfjlsjflsjfs",
        correct:"d",


    },
    {
        quizname:"what is the difference between flutter and Kotlin",
        a:"xkfjlsjflsjfs",
        b:"xkfjlsjflsjfs",
        c:"xkfjlsjflsjfs",
        d:"xkfjlsjflsjfs",
        correct:"d",


    },
    {
        quizname:"what is the difference between flutter and Kotlin",
        a:"xkfjlsjflsjfs",
        b:"xkfjlsjflsjfs",
        c:"xkfjlsjflsjfs",
        d:"xkfjlsjflsjfs",
        correct:"d",


    },
    {
        quizname:"what is the difference between flutter and Kotlin",
        a:"xkfjlsjflsjfs",
        b:"xkfjlsjflsjfs",
        c:"xkfjlsjflsjfs",
        d:"xkfjlsjflsjfs",
        correct:"d",


    },
]


const quiz=document.getElementById("quiz")
const questions=document.getElementById("question")
const answers=document.getElementById("answer")
const a=document.getElementById("a_text")
const b=document.getElementById("btext")
const c=document.getElementById("c_text")
const d=document.getElementById("d_text")
const submit=document.getElementById("submit")

let newquiz=0
let score=0

function loadquiz(){
    selectanswers()


    const newquizdata=quizlist[newquiz]
    questionel.innerText = newquizdata.question
    a_text.innerText=newquiz.a
    b_text.innerText=newquiz.b
    c_text.innerText=newquiz.c
    d_text.innerText=newquiz.d
    

}

function selectanswers(){
    answers.forEach(answers =>answers.checked=false) 
        
    
}

function getanswers(){
    let answers
    answers.forEach(answers=>{
        if(answers.checked){
            answer=answers.id
        }
    })
    return answer
}

submit.addEventListener('click', ()=>{
    const anser=getanswers()
    if(anser){
        if(anser === quizlist[newquiz].correct){
            score++
        }
        newquiz++
        if(newquiz < newquiz.length){
            loadquiz()
        }else
        {
            quiz.innerHTML=`you answeres ${score}/${newquiz.length}`
        }
    }
})