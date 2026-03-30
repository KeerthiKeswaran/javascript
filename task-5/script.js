let quizData = [];
let currentQuestionIndex = 0;
let score = 0;

// DOM Element Selectors
const quizContainer = document.getElementById('quizContainer');
const questionText = document.getElementById('questionText');
const questionCountLabel = document.getElementById('questionCountLabel');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackContainer = document.getElementById('feedbackContainer');
const explanationLabel = document.getElementById('explanationLabel');
const nextBtn = document.getElementById('nextBtn');

const resultContainer = document.getElementById('resultContainer');
const finalScoreDisplay = document.getElementById('finalScoreDisplay');
const restartBtn = document.getElementById('restartBtn');

/**
 * Initializes the quiz by fetching questions from the external JSON file.
 */
async function loadQuiz() {
    try {
        const response = await fetch('questions.json');
        
        if (!response.ok) {
            throw new Error('Failed to load quiz data.');
        }

        quizData = await response.json();
        startQuiz();

    } catch (error) {
        console.error('Error loading quiz:', error);
        questionText.textContent = 'Oops! Failed to load questions.';
    }
}

/**
 * Sets initial state and shows the first question.
 */
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    showQuestion();
}

/**
 * Renders the current question and its options dynamically.
 */
function showQuestion() {
    resetState();
    const currentQuestion = quizData[currentQuestionIndex];
    
    // Update labels and question text
    questionCountLabel.textContent = `Question ${currentQuestionIndex + 1}/${quizData.length}`;
    questionText.textContent = currentQuestion.question;

    // Create buttons for each option
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        
        // Use an arrow function to handle selection
        button.addEventListener('click', () => selectAnswer(index, button));
        optionsContainer.appendChild(button);
    });
}

/**
 * Clears the options and feedback area for the next question.
 */
function resetState() {
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
    feedbackContainer.classList.add('hidden');
    explanationLabel.textContent = '';
}

/**
 * Handles the user selection and provides immediate feedback.
 * @param {number} selectedIndex - The index of the chosen option
 * @param {HTMLElement} selectedBtn - The button that was clicked
 */
function selectAnswer(selectedIndex, selectedBtn) {
    const currentQuestion = quizData[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correct;
    
    // Disable all buttons after one is chosen
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    // Provide visual feedback
    if (isCorrect) {
        score++;
        selectedBtn.classList.add('correct');
    } else {
        selectedBtn.classList.add('wrong');
        // Visually highlight the correct one even if the user didn't pick it
        allButtons[currentQuestion.correct].classList.add('correct');
    }

    // Show feedback and explanation
    explanationLabel.textContent = currentQuestion.explanation;
    feedbackContainer.classList.remove('hidden');

    // If it's the last question, change 'Next' to 'Finish'
    if (currentQuestionIndex === quizData.length - 1) {
        nextBtn.textContent = 'Finish Quiz';
    } else {
        nextBtn.textContent = 'Next Question';
    }
}

/**
 * Navigates to the next question or shows the final result.
 */
function handleNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResults();
    }
}

/**
 * Displays the user's final score with contextual feedback.
 */
function showResults() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    
    const percentage = Math.round((score / quizData.length) * 100);
    
    let feedbackText = '';
    if (percentage === 100) feedbackText = 'Perfect score! Excellence achieved!';
    else if (percentage >= 70) feedbackText = 'Great job! You have a solid understanding.';
    else feedbackText = 'Keep learning! Practice makes perfect.';

    finalScoreDisplay.innerHTML = `Your Score: <strong>${score} / ${quizData.length}</strong> (${percentage}%).<br><br>${feedbackText}`;
}

// Event Listeners
nextBtn.addEventListener('click', handleNextQuestion);
restartBtn.addEventListener('click', startQuiz);

// Entry point: Load the quiz when the page loads
loadQuiz();
