var countDownTimer;
const maxTime = 5 * 60 *1000; //time is in seconds
function setCountDownTimer(){
    countDownTimer = maxTime;
}
//When the person clicks the begin button the timer starts
//start time
let timerInterval = setInterval(updateTimer, 1000);
function updateTimer(){
    countDownTime = countDownTimer - 1;
}
//questions is asked
function SetupQuestions() {
    console.log("SetupQuestions Started");
    let question1 = {
        id: "quest0",
        question: "To select elements with a specific class:",
        answer1: "write a semicolon (;) character, followed by",
        answer2: "write s period (.) character, followed by ",
        answer3: "write a period (.) character",
        answer4: "write a comma (,) character",
        correctAnswer: 2


    };

    let question2 ={
        id: "quest1",
        question: "In CSS, a color can be specified by using a",
        answer1: "yes",
        answer2: "no",
        answer3: "null",
        answer4: null,
        correctAnswer: 1
    };
    arrayofQuestions.push(question1);
    arrayofQuestions.push(question2);
    console.log(" SetupQuestions arrayofQuestions: ", arrayofQuestions)
}

function nextQuestion(){
    for(let i=0; i<arrayofQuestions.length; i++){

    }

}

function showQuestion(questionindex){
    let questionSection = document.getElementID('question');
    let newQuestion = document.createElement('div');
    newQuestion.id = arrayofQuestion[questionindex].id;
   newQuestion.innerText = arrayQuestions[questionindex].question;
   questionSection.appendChild(newQuestion);
}
//if question is correct next question

//if question is incorrect time penalty
//if answer is correct show points and then go to the next question
//Once all questions have been answered give options
//once all questions have been answered give options to save score
//If user chooses to save score show the scoreboard