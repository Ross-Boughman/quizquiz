const questionArea = document.getElementById("question-area");
const timer = document.getElementById("timer");
const btnStart = document.getElementById("btn-start");
const counter = document.getElementById("counter");
const titleitem = document.getElementById("title-item");
const questionAnswers = document.getElementById("question-answers");
const playerScore = document.getElementById("score");
const scoreBtn = document.getElementById("score-btn");
let i = 0;
let score = 0;
let count = 75;
const alert = document.getElementById("alert");
const info = document.getElementById("info");
let allScores = [];
let storedScores = JSON.parse(localStorage.getItem("userData"));
let questions = [
    {
        title: "What does Tommy Wiseu say after he throws the water bottle?",
        choices: ["I did not hit her","Oh, hi Mark","DO YOU UNDERSTAND LIFE?", "haha"],
        answer : "Oh, hi Mark"    
    },
    {
        title: "1?",
        choices: ["1","not 1","2", "yes"],
        answer : "1"    
    },
    {
        title: "What is the air speed velocity of an unladen swallow?",
        choices: ["I don't know that","yellow","What do you mean, African or European?", "20.1 miles per hour"],
        answer : "20.1 miles per hour"    
    },
    {
        title: "Which answer is the correct one?",
        choices: ["this one?","this one?","this one?","this one?"],
        answer : "this one?"    
    },
    {
        title: "What did you lose?",
        choices: ["this quiz","your keys","nothing!","The Game"],
        answer : "The Game"    
    },
]
btnStart.addEventListener("click", starQuiz);
function starQuiz(){
    if(storedScores !==null) {
        allScores = storedScores;
    }
    info.classList.add("d-none")
    btnStart.classList.add("d-none")
    counter.classList.remove("d-none")
    questionArea.classList.remove("d-none")
    next = questions[i]
    console.log(next.title)
    
        displayQuestion(next)

    gametime()
}
scoreBtn.addEventListener("click" , function(){
    let name = document.getElementById("inputScore").value
    scorePage(name, count)
});


function gametime(){

    var timeinterval = setInterval(function(){
        timer.innerText = count
         count--;
        }, 1000);

}

function scorePage(a, b) {

    var userData = {
        inits: a,
        userScore: b
    };
    allScores.push(userData);

    localStorage.setItem("userData", JSON.stringify(allScores));
    location.href = "score.html";
}

function displayQuestion(question){
    titleitem.innerText=question.title
    question.choices.forEach(element => {
     var button =document.createElement("button")
    button.className="btn-primary btn-block text-left"
    button.innerText=element
    questionAnswers.appendChild(button)
    button.addEventListener("click", displaynextQuestion)
    });
}


function displaynextQuestion(e){
    i++
    if(i < questions.length){
        correction(e.target.innerText == next.answer)
        questionAnswers.innerHTML=""
        if(i < questions.length){    
            next= questions[i]
            displayQuestion(next)  
        }else {
            i = 0
            displayQuestion(next)  
        }

    }else{
        console.log("endgame")
        endgame()
        

    }
    
     
}
function correction(response){
    
    if(response){
        alert.innerText= "Good"
        console.log("Good")
    }else {
        alert.innerText="Wrong"
        count = count -15
        timer.innerHTML = count
        console.log("Wrong")

    }
    setTimeout(function(){
        alert.innerText=""
    
        }, 1000);

}
 function endgame (){
    playerScore.innerText = count
    addscore.classList.remove("d-none")
    counter.classList.add("d-none")
    questionArea.classList.add("d-none")
    addscore.classList.remove("d-none")
 }