const quizlist=[
    {
        question:"what is the difference between flutter and Kotlin",
        a:"xkfjlsjflsjfs",
        b:"xkfjlsjflsjfs",
        c:"xkfjlsjflsjfs",
        d:"xkfjlsjflsjfs",
        correct:"d",


    },
    {
        question:"what is the similarity between flutter and Kotlin",
        a:"xkfjlsjflsjfs",
        b:"xkfjlsjflsjfs",
        c:"xkfjlsjflsjfs",
        d:"xkfjlsjflsjfs",
        correct:"d",


    },
    {
        question:"what is the difference between flutter and Kotlin",
        a:"xkfjlsjflsjfs",
        b:"xkfjlsjflsjfs",
        c:"xkfjlsjflsjfs",
        d:"xkfjlsjflsjfs",
        correct:"d",


    },
    {
        question:"what is the difference between flutter and Kotlin",
        a:"xkfjlsjflsjfs",
        b:"xkfjlsjflsjfs",
        c:"xkfjlsjflsjfs",
        d:"xkfjlsjflsjfs",
        correct:"d",


    },
];


const quiz=document.getElementById('quiz')
const questionels=document.getElementById('question')
const answerels=document.querySelectorAll('.answer')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitbtn=document.getElementById('submit')

let newquiz=0
let score=0
loadquiz()

function loadquiz(){
    selectanswers()


    const newquizdata=quizlist[newquiz]
    questionels.innerHTML = newquizdata.question
    a_text.innerHTML=newquizdata.a
    b_text.innerHTML=newquizdata.b
    c_text.innerHTML=newquizdata.c
    d_text.innerHTML=newquizdata.d
    

}

function selectanswers(){
    answerels.forEach(answerels =>answerels.checked=false) 
        
    
}

function getanswers(){
    let answe
    answerels.forEach(answerel=>{
        if(answerel.checked){
            answe=answerel.id
        }
    })
    return answe
}

submitbtn.addEventListener('click', ()=>{
    const anser=getanswers()
    if(anser){
        if(anser === quizlist[newquiz].correct){
            score++
        }
        newquiz++
        if(newquiz < quizlist.length){
            loadquiz()
        }else
        {
            quiz.innerHTML=`you answeres ${score}/${quizlist.length}`
        }
    }
})