
const questions = [
  {
    id: 1,
    question: "What is the capital of Pakistan?",
    options: ["Lahore", "Islamabad", "Karachi", "Peshawar"],
    answer: "Islamabad",
    userAnswer: "Islamabad"
  },
  {
    id: 2,
    question: "Which language is used for web development?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
    userAnswer: "JavaScript"
  },
  {
    id: 3,
    question: "2 + 5 = ?",
    options: ["5", "6", "7", "8"],
    answer: "7",
    userAnswer: "6"
  },
  {
    id: 4,
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Home Tool Markup Language",
      "Hyperlinks Text Mark Language"
    ],
    answer: "Hyper Text Markup Language",
    userAnswer: "Hyper Text Markup Language"
  }
];

console.log("===== QUIZ QUESTIONS =====");

// for...of Loop
for (const q of questions) {
  console.log(`Question ${q.id}: ${q.question}`);

  for (const option of q.options) {
    console.log("- " + option);
  }

  console.log("Your Answer:", q.userAnswer);
  console.log("---------------------------");
}

// map()
// Create a new array containing only question titles
const questionTitles = questions.map((q) => q.question);

console.log("\nQuestions List:");
console.log(questionTitles);

// filter()
// Find correctly answered questions
const correctAnswers = questions.filter(
  (q) => q.userAnswer === q.answer
);

console.log("\nCorrectly Answered Questions:");
console.log(correctAnswers);

// filter()
// Find incorrect answers
const wrongAnswers = questions.filter(
  (q) => q.userAnswer !== q.answer
);

console.log("\nWrong Answers:");
console.log(wrongAnswers);

// reduce()
// Calculate total score
const score = questions.reduce((total, q) => {
  return q.userAnswer === q.answer ? total + 1 : total;
}, 0);

console.log("\n===== RESULT =====");
console.log(`Total Questions : ${questions.length}`);
console.log(`Correct Answers : ${correctAnswers.length}`);
console.log(`Wrong Answers   : ${wrongAnswers.length}`);
console.log(`Final Score     : ${score}/${questions.length}`);

// map()
// Display result summary
const summary = questions.map((q) => ({
  Question: q.question,
  CorrectAnswer: q.answer,
  YourAnswer: q.userAnswer,
  Status: q.userAnswer === q.answer ? "Correct ✅" : "Wrong ❌"
}));

console.log("\n===== SUMMARY =====");
console.table(summary);