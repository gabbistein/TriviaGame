$(document).ready(function () {

    var gameInfo = [
        questionOne = {
            question: "What is the prize at the end of the quest 'Discerning the Transmundane'?",
            answers: ["Oghma Infinium", "The Mace of Molag Bal", "Ebony Blade", "Mehrune's Razor"]
        },
        questionTwo = {
            question: "That one town guard couldn't be an adventurer anymore because he took an arrow to his:",
            answers: ["Knee", "Throat", "Eye", "Foot"]
        },
        questionThree = {
            question: "",
            answers: [""]
        },
        questionFour = {
            question: "",
            answers: [""]
        },
        questionFive = {
            question: "What is the name of the lizard-like race in Skyrim?",
            answers: ["Argonians", "Dunmer", "Redguards", "Bosmer"]
        }
    ]

    var rightAnswers = 0;
    var wrongAnswers = 0;

    function startGame() {
        $("#gameScreen").css("display", "none");
        $("#replyScreen").css("display", "none");
        $("#endScreen").css("display", "none");
        rightAnswers = 0;
        wrongAnswers = 0;
    }

    // This displays your question, answer choices, and timer when you click startButton.
    $("#startButton").click(function () {
        $("#gameScreen").css("display", "block");
    })

    // This is the question you need to answer.
    $("#question").text(gameInfo[0].question)



});




// When you click on the start button, the gameScreen loads up. It populates a question and the timer counts down from 7 seconds.

// There are four possible answers, only one is correct.

// Three things happen from this view:
// 1. You answer correctly within the time limit. This loads up replyScreen to say "Congrats, etc." and you get to read that for 5 seconds until gameScreen loads again with a new question.

// 2. You answer incorrecly within the time limit. This loads up replyScreen to say "Wrong answer, etc." and you get to read that for 5 seconds until gameScreen loads again with a new question.

// 3. You do not submit an answer under the time limit and replyScreen loads "You ran out of time, etc." and waits 5 seconds until gameScreen loads again with a different question.

// The game keeps track of how many incorrect guesses (wrong answers + time outs) and correct guesses you have for one session.

// On the endScreen, report total correctAnswers and incorrectAnswers.
