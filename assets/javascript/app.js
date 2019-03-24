
// When you click on the start button, the gameScreen loads up. It populates a question and the timer counts down from 7 seconds.

// There are four possible answers, only one is correct.

// Three things happen from this view:
// 1. You answer correctly within the time limit. This loads up replyScreen to say "Congrats, etc." and you get to read that for 5 seconds until gameScreen loads again with a new question.

// 2. You answer incorrecly within the time limit. This loads up replyScreen to say "Wrong answer, etc." and you get to read that for 5 seconds until gameScreen loads again with a new question.

// 3. You do not submit an answer under the time limit and replyScreen loads "You ran out of time, etc." and waits 5 seconds until gameScreen loads again with a different question.

// The game keeps track of how many incorrect guesses (wrong answers + time outs) and correct guesses you have for one session.

// On the endScreen, report total correctAnswers and incorrectAnswers.


$(document).ready(function () {




    var gameInfo = {
        questionOne: {
            question: "What is this?",
            correctAnswer: "Me",
            wrongAnswer =["Not me", "You"]
        },
        questionTwo: {
            question: "",
            correctAnswer: "",
            wrongAnswer: []
        },
        questionThree: {
            question: "",
            correctAnswer: "",
            wrongAnswer: []
        },
        questionFour: {
            question: "",
            correctAnswer: "",
            wrongAnswer: []
        },
        questionFive: {
            question: "",
            correctAnswer: "",
            wrongAnswer: []
        }
    }

});