import { quizArray } from "./quiz.js";
import { rightResponse, wrongResponse } from "./feedback.js";
import { shuffleArray, getRandom, disableButtonsInDiv, enableButtonsInDiv } from "./helpers.js";

// TODO - add option to choose number of quiz questions
// add "Retake Quiz" button
// add question numbers
// add reset function to reset when "Next Question button is pressed"
// require an answer for each question

const askQuestion = document.querySelector("#ask-question");
const labelA = document.getElementById("label-a");
const labelB = document.getElementById("label-b");
const labelC = document.getElementById("label-c");
const labelD = document.getElementById("label-d");
const feedback = document.getElementById("feedback");
const nxtQ = document.getElementById("nxtQ");
const multipleChoiceContainer = document.getElementById(
  "multiple-choice-container"
);
const buttons = multipleChoiceContainer.querySelectorAll("button");

let shuffledArray = shuffleArray(quizArray);

let i = 0;
let score = 0;

askQuestion.innerText = shuffledArray[i].question;
labelA.innerText = shuffledArray[i].arrayOfAnswers[0];
labelB.innerText = shuffledArray[i].arrayOfAnswers[1];
labelC.innerText = shuffledArray[i].arrayOfAnswers[2];
labelD.innerText = shuffledArray[i].arrayOfAnswers[3];

multipleChoiceContainer.addEventListener("click", function (event) {
  const selectedAnswer = event.target;
//   disableButtonsInDiv(multipleChoiceContainer);

//   choiceButtons.forEach(button => {
//     if (button !== event.target) {
//       choiceButtons.disabled = true;
//     }
//   });
    // buttons.forEach(function(button) {
    //   if (button !== event.target) {
    //     button.classList.add("disabled");
    //   }
    // })


  if (selectedAnswer.id == shuffledArray[i].answerIdx) {

    feedback.innerText = getRandom(rightResponse);
    feedback.style.visibility = "visible";
    score++;

  } else {

    feedback.innerText = `${getRandom(wrongResponse)}\nThe correct answer is: ${shuffledArray[i].correctAnswer}`;
    feedback.style.visibility = "visible";

  }
});

nxtQ.addEventListener("click", function () {

  i++;

  // Check to see if all questions have been answered
  if (i >= shuffledArray.length) {

    feedback.innerText = `You have reached the end. \nYou got ${score}/${shuffledArray.length} answers correct`;
    feedback.style.visibility = "visible";

    // window.location.href = "./complete.html";

  } else {

    // buttons.forEach(function(button) {
   
    //     button.classList.remove("disabled");
    //     choiceButtons.style.background = "green";

    // });

    feedback.style.visibility = "hidden";
    askQuestion.innerText = shuffledArray[i].question;
    labelA.innerText = shuffledArray[i].arrayOfAnswers[0];
    labelB.innerText = shuffledArray[i].arrayOfAnswers[1];
    labelC.innerText = shuffledArray[i].arrayOfAnswers[2];
    labelD.innerText = shuffledArray[i].arrayOfAnswers[3];
  }
});
