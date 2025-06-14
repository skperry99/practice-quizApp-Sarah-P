// Array of quiz questions
let questionArray = ['What is the capital of France?', 'Which planet is known as the "Red Planet"? ', 'What is the chemical symbol for water?', 'In what year did World War II begin?', 'Who wrote "Hamlet"?', 'What is the largest ocean on Earth?', 'What is the name of the first person to step on the moon?', 'Which gas is necessary for life and is released during photosynthesis?', 'What is the name of the longest river in the world?', 'What is the currency of Japan?'];

// Array of answers for quiz questions
let answerArray = ['Paris', 'Mars', 'H2O ', '1939', 'William Shakespeare ', 'Pacific Ocean', 'Neil Armstrong', 'Oxygen', 'Nile', 'Yen'];

// Array of indexes for the correct answers
let indexArray = [1, 1, 0, 1, 0, 1, 0, 1, 1, 1];

// Array of multiple choice options for quiz questions
let optionArray = ['London', 'Paris', 'Rome', 'Berlin', 'Earth', 'Mars', 'Venus', 'Jupiter', 'H2O', 'CO2', 'NaCl', 'O2', '1914', '1939', '1941', '1945', 'William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Leo Tolstoy', 'Atlantic Ocean', 'Pacific Ocean', 'Indian Ocean', 'Arctic Ocean', 'Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin', 'Alan Shepard', 'Carbon Dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen', 'Amazon', 'Nile', 'Mississippi', 'Yangtze', 'Euro', 'Yen', 'Dollar', 'Pound'];

// Create question objects using questionArray, answerArray, indexArray, and optionArray
class QuizInfo {
  constructor(question, correctAnswer, answerIdx) {
    this.question = question;
    this.arrayOfAnswers = [];
    this.correctAnswer = correctAnswer;
    this.answerIdx = answerIdx;
  }

  // Build array of answers for each question object
  addAnswer(choice){
    this.arrayOfAnswers.push(choice);
  }
}

let q1 = new QuizInfo(questionArray[0], answerArray[0], indexArray[0]);
let q2 = new QuizInfo(questionArray[1], answerArray[1], indexArray[1]);
let q3 = new QuizInfo(questionArray[2], answerArray[2], indexArray[2]);
let q4 = new QuizInfo(questionArray[3], answerArray[3], indexArray[3]);
let q5 = new QuizInfo(questionArray[4], answerArray[4], indexArray[4]);
let q6 = new QuizInfo(questionArray[5], answerArray[5], indexArray[5]);
let q7 = new QuizInfo(questionArray[6], answerArray[6], indexArray[6]);
let q8 = new QuizInfo(questionArray[7], answerArray[7], indexArray[7]);
let q9 = new QuizInfo(questionArray[8], answerArray[8], indexArray[8]);
let q10 = new QuizInfo(questionArray[9], answerArray[9], indexArray[9]);

// Array of question objects
const quizArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

// Populating answerArray for each question object in quizArray
for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 4; j++) {
        let num = j + (i*4);
        quizArray[i].arrayOfAnswers.push(optionArray[num]);
    }
}

export { quizArray };