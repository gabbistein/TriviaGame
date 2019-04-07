$(document).ready(function () {

    var gameInfo = [
        questionOne = {
            question: "What is the prize at the end of the quest 'Discerning the Transmundane'?",
            answers: [
                { text: "Oghma Infinium", correct: true },
                { text: "The Mace of Molag Bal", correct: false },
                { text: "Ebony Blade", correct: false },
                { text: "Mehrune's Razor", correct: false }
            ]
        },
        questionTwo = {
            question: "That one town guard couldn't be an adventurer anymore because he took an arrow to his:",
            answers: [
                { text: "Knee", correct: true },
                { text: "Throat", correct: false },
                { text: "Eye", correct: false },
                { text: "Foot", correct: false }
            ]
        },
        questionThree = {
            question: "Out of all the joinable factions in Skyrim, which rewards you with the Shrouded Armor set?",
            answers: [
                { text: "The Dark Brotherhood", correct: true },
                { text: "The Thieves Guild", correct: false },
                { text: "The Imperial Legion", correct: false },
                { text: "The Companions", correct: false }
            ]
        },
        questionFour = {
            question: "Which of the choices below is not a school of magic in Skyrim?",
            answers: [
                { text: "Divination", correct: true },
                { text: "Illusion", correct: false },
                { text: "Conjuration", correct: false },
                { text: "Restoration", correct: false },
            ]
        },
        questionFive = {
            question: "What is the name of the lizard-like race in Skyrim?",
            answers: [
                { text: "Argonians", correct: true },
                { text: "Dunmer", correct: false },
                { text: "Redguards", correct: false },
                { text: "Bosmer", correct: false }
            ]
        }
    ]

    var indexArray = [0, 1, 2, 3]
    var randomIndex = [];
    console.log(randomIndex);
    var rightAnswers = 0;
    var wrongAnswers = 0;
    var counter = 0;
    var timer;
    var timerTwo;
    var timerThree;

    function stopTimer() {
        clearTimeout(timer);
        clearTimeout(timerTwo);
        clearTimeout(timerThree);
    }

    function replyTimeUp() {
        timer = setTimeout(leaveReplyScreen, 2800);
    }

    function endTimeUp() {
        timerTwo = setTimeout(endGame, 3000);
    }

    function gameTimeUp() {
        timerThree = setTimeout(timeOut, 7000);
    }

    // This displays your question, answer choices, and timer when you click startButton.
    $("#startButton").click(function () {
        rightAnswers = 0;
        wrongAnswers = 0;
        counter = 0;
        console.log(counter);
        randomIndex = [];
        gameTimeUp();
        shuffleQuestions();
        $("#endScreen").css("display", "none");
        $("#replyScreen").css("display", "none");
        $("#gameScreen").css("display", "block");
        playTrivia(gameInfo);
    });

    // This displays the next page after clicking the gameplay buttons.
    $(".question").click(function () {
        $("#replyScreen").css("display", "block");
        $("#gameScreen").css("display", "none");
        clearTimeout(timerThree);
        replyTimeUp();
        if (($(this).attr("isCorrect")) == "true") {
            rightAnswers++;
            $("#rightOrNah").text("You're right!")
        } else {
            wrongAnswers++;
            $("#rightOrNah").text("You're wrong!")
        }
        $("#correctAnswers").text("The correct answer is: " + gameInfo[counter].answers[0].text);
        $("#incorrectAnswers").text("You have answered " + rightAnswers + " questions correctly and " + wrongAnswers + " questions incorrectly.");
        console.log(counter);
    })

    function timeOut() {
        $("#replyScreen").css("display", "block");
        $("#gameScreen").css("display", "none");
        wrongAnswers++;
        replyTimeUp();
        $("#rightOrNah").text("Time's up!")
        $("#correctAnswers").text("The correct answer is: " + gameInfo[counter].answers[0].text);
        $("#incorrectAnswers").text("You have answered " + rightAnswers + " questions correctly and " + wrongAnswers + " questions incorrectly.");
        clearTimeout(timerThree);
    }

    function leaveReplyScreen() {
        $("#gameScreen").css("display", "block");
        $("#replyScreen").css("display", "none");
        counter++;
        if (counter > 4) {
            endGame();
        } else if (counter <= 4) {
            playTrivia(gameInfo);
            gameTimeUp();
        }
    }

    // The end of the game.
    function endGame() {
        $("#gameScreen").css("display", "none");
        $("#replyScreen").css("display", "none");
        $("#endScreen").css("display", "block");
        endTimeUp();
        $("#endMessage").text("Thanks for taking my Skyrim quiz, click the Start button to play again!");
        $("#correctAnswersEnd").text("You got " + rightAnswers + " questions right!");
        $("#incorrectAnswersEnd").text("You got " + wrongAnswers + " questions wrong!");
        stopTimer();
    }

    // This function shuffles elements in an array which, in this case, changes up the order of the questions in case the player wants to take the quiz again.
    function randomizer(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // This function uses the array randomizer to pick a question from the gameInfo array and return it.
    function shuffleQuestions() {
        randomizer(gameInfo);
        console.log({ gameInfo });
        return;
    }

    function playTrivia(gameInformation) {
        for (let i = 0; i < indexArray.length; i++) {
            randomIndex = randomizer(indexArray);
        }
        loadInfo(gameInformation[counter]);
        console.log("runthrough");
    }


    // This function specifies what to write into the divs.
    function loadInfo(q) {
        $("#question").text(q.question);
        $("#triviaAnswer1")
            .text(q.answers[randomIndex[0]].text)
            .attr("isCorrect", q.answers[randomIndex[0]].correct);
        $("#triviaAnswer2")
            .text(q.answers[randomIndex[1]].text)
            .attr("isCorrect", q.answers[randomIndex[1]].correct);
        $("#triviaAnswer3")
            .text(q.answers[randomIndex[2]].text)
            .attr("isCorrect", q.answers[randomIndex[2]].correct);
        $("#triviaAnswer4")
            .text(q.answers[randomIndex[3]].text)
            .attr("isCorrect", q.answers[randomIndex[3]].correct);
    }

});


// PSUEDOCODE BELOW:

// When you click on the start button, the gameScreen loads up. It populates a question and the timer counts down from 7 seconds.

// There are four possible answers, only one is correct.

// Three things happen from this view:
// 1. You answer correctly within the time limit. This loads up replyScreen to say "Congrats, etc." and you get to read that for 5 seconds until gameScreen loads again with a new question.

// 2. You answer incorrecly within the time limit. This loads up replyScreen to say "Wrong answer, etc." and you get to read that for 5 seconds until gameScreen loads again with a new question.

// 3. You do not submit an answer under the time limit and replyScreen loads "You ran out of time, etc." and waits 5 seconds until gameScreen loads again with a different question.

// The game keeps track of how many incorrect guesses (wrong answers + time outs) and correct guesses you have for one session.

// On the endScreen, report total correctAnswers and incorrectAnswers.



// Per Ken's Help:

// Clicking the button to move on to next screen.

// When you click the button you up your win or losses, then move on to the next question (no shuffling required) display the reply screen & put the timer back to zero.
