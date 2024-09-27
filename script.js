const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
    correctAnswer: "William Shakespeare"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    correctAnswer: "Jupiter"
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "N2"],
    correctAnswer: "H2O"
  },
  {
    question: "In which year did World War II end?",
    options: ["1945", "1918", "1939", "1965"],
    correctAnswer: "1945"
  },
  {
    question: "Who discovered penicillin?",
    options: ["Marie Curie", "Albert Einstein", "Alexander Fleming", "Isaac Newton"],
    correctAnswer: "Alexander Fleming"
  },
  {
    question: "Which country is home to the kangaroo?",
    options: ["India", "Australia", "South Africa", "Brazil"],
    correctAnswer: "Australia"
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Kilimanjaro", "Mount Everest", "K2", "Mount Fuji"],
    correctAnswer: "Mount Everest"
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    correctAnswer: "2"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"],
    correctAnswer: "Leonardo da Vinci"
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options-container');
  
  // Clear existing options
  optionsEl.innerHTML = '';

  // Load current question
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;

  // Display options
  currentQuestion.options.forEach(option => {
    const button = document.createElement('button');
    button.innerText = option;
    button.classList.add('option-btn');
    button.addEventListener('click', () => selectAnswer(button, option));
    optionsEl.appendChild(button);
  });
}

function selectAnswer(button, selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Check if the selected option is correct
  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
    button.style.backgroundColor = 'green';  // Correct answer: Green
  } else {
    button.style.backgroundColor = 'red';  // Incorrect answer: Red
  }

  // Disable all option buttons after a selection
  Array.from(document.getElementsByClassName('option-btn')).forEach(btn => {
    btn.disabled = true;
  });

  // Move to next question after a short delay
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    setTimeout(loadQuestion, 1000);  // Wait 1 second before loading next question
  } else {
    setTimeout(showResults, 1000);  // Show results after the last question
  }
}

function showResults() {
  const quizBox = document.querySelector('.quiz-box');
  quizBox.innerHTML = `<h2>Your score is ${score} out of ${quizQuestions.length}!</h2>`;
}

document.getElementById('next-btn').addEventListener('click', () => {
  if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion();
  }
});

// Load the first question when the page loads
loadQuestion();