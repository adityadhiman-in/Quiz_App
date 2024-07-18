const questions = [
    {
        question: "Which is the largest river in the world?",
        answers:[
            {text:"Ganga", correct: false},
            {text:"Yamuna", correct: false},
            {text:"Amazon", correct: true},
            {text:"Brahmaputra", correct: false}
        ]
    },
    {
        question: "Which is the largest country in the world?",
        answers:[
            {text:"India", correct: false},
            {text:"Russia", correct: true},
            {text:"China", correct: false},
            {text:"America", correct: false}
        ]
    }
];

const questionElement = document.getElementById("ques");
const options = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    nextBtn.classList.add("hidden");
    showQues();
}

function showQues(){
    options.innerHTML = "";
    nextBtn.classList.add("hidden");
    let currentQues = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQues.question;

    currentQues.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", (event) => {
            const selectedBtn = event.target;
            const isCorrect = selectedBtn.dataset.correct === "true";
            if(isCorrect){
                selectedBtn.classList.add("correct");
                score++;
            } else {
                selectedBtn.classList.add("incorrect");
            }
            Array.from(options.children).forEach(btn => {
                btn.disabled = true;
                if (btn.dataset.correct === "true") {
                    btn.classList.add("correct");
                }
            });
            nextBtn.classList.remove("hidden");
        });
        options.appendChild(button);
    });
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQues();
    } else {
        nextBtn.innerHTML = "Restart";
        nextBtn.addEventListener("click", startQuiz, {once: true});
    }
});

startQuiz();
