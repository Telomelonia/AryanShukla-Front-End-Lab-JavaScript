function Question(text,choices,answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice
}

var questions = [
    new Question("The colour of apple is?", ["Red", "Blue", "Black", "White"], "Red"),
    new Question("How many wheels car have?", ["2", "1", "4", "3"], "4"),
    new Question("Which among the following is not a programming language?", ["Python", "JavaScript", "Pycharm", "Java"], "Pycharm"),
    new Question("Which is not a JavaScript Framework?", ["Django", "JQuery", "Python Script", "NodeJS"], "Django"),
    new Question("JavaScript supports: ", ["Functions", "XHTML", "CSS", "HTML"], "Functions")
];

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.checkOptionWithAnswer = function(answer) {
    if (this.questions[this.questionIndex].isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex
}

function showScore() {
    document.querySelector('#quiz').innerHTML = `<h1>Result</h1>
        <div id="score">You scored ${quiz.score} / ${quiz.questions.length}</div>`;
}

function loadQuestion() {

    if (quiz.isEnded()) {
        showScore();
        return;
    }

    var currentQuestion = quiz.questions[quiz.questionIndex];
    document.querySelector('#question').textContent = currentQuestion.text;

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        document.getElementById('choice' + i).textContent = currentQuestion.choices[i];
        handleOptionButtonClick('btn' + i, currentQuestion.choices[i]);
    }
    showProgress();
}

function handleOptionButtonClick(btnId, choice) {
    var button = document.querySelector('#' + btnId);
    button.onclick = function() {
        quiz.checkOptionWithAnswer(choice);
        loadQuestion();
    };
}

function showProgress() {
    document.querySelector('#progress').textContent = 'Question ' + (quiz.questionIndex + 1) + ' of ' + quiz.questions.length;
}

var quiz = new Quiz(questions);
loadQuestion();