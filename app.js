import { quizArray } from "./quiz.js";
import { rightResponse, wrongResponse } from "./feedback.js";
import {
  shuffleArray,
  getRandom,
  getRandomArray,
  disableButtonsInDiv,
  enableButtonsInDiv,
} from "./helpers.js";

// TODO - add option to choose number of quiz questions
// add "Retake Quiz" button
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
const choiceButtons = multipleChoiceContainer.querySelectorAll("button");

let pickQuizLength = getRandomArray(quizArray, 5);
let shuffledArray = shuffleArray(pickQuizLength);

let i = 0;
let score = 0;

askQuestion.innerText = `${i + 1}.)    ${shuffledArray[i].question}`;
labelA.innerText = shuffledArray[i].arrayOfAnswers[0];
labelB.innerText = shuffledArray[i].arrayOfAnswers[1];
labelC.innerText = shuffledArray[i].arrayOfAnswers[2];
labelD.innerText = shuffledArray[i].arrayOfAnswers[3];

// Event listener for multiple choice answer selection
multipleChoiceContainer.addEventListener("click", function (event) {
  // Disable multiple choice buttons that weren't selected
  if (event.target.matches("button")) {
    const selectedAnswer = event.target;
    choiceButtons.forEach((button) => {
      if (button !== selectedAnswer) {
        button.classList.add("disabled");
      }
    });

  // Check to see if the answer is correct and output correct/incorrect feedback
  if (selectedAnswer.id == shuffledArray[i].answerIdx) {
    feedback.innerText = getRandom(rightResponse);
    feedback.style.visibility = "visible";
    score++;
  } else {
    feedback.innerText = `${getRandom(wrongResponse)}\nThe correct answer is: ${
      shuffledArray[i].correctAnswer
    }`;
    feedback.style.visibility = "visible";
  }
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

    choiceButtons.forEach((button) => {
      button.classList.remove("disabled");
    });

    feedback.style.visibility = "hidden";
    askQuestion.innerText = `${i + 1}.)    ${shuffledArray[i].question}`;
    labelA.innerText = shuffledArray[i].arrayOfAnswers[0];
    labelB.innerText = shuffledArray[i].arrayOfAnswers[1];
    labelC.innerText = shuffledArray[i].arrayOfAnswers[2];
    labelD.innerText = shuffledArray[i].arrayOfAnswers[3];
  }
});
