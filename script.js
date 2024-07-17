const questions = [
    {
        question: "Which is the largest river in the world",
        answers:[
            {text:"Ganga", correct: false},
            {text:"Yamuna", correct: false},
            {text:"Amazon", correct: true},
            {text:"Bhramhputra", correct: false}
        ]
    },
    {
        question: "Which is the largest country in the world",
        answers:[
            {text:"India", correct: false},
            {text:"Russia", correct: true},
            {text:"China", correct: false},
            {text:"America", correct: false}
        ]
    }
];
const questionElement = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next"
    showQues();
}
function showQues(){
    let currentQues = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQues.question;

    
}


