
var card = $("#quiz-area");
var countStartNumber = 30;

// Trivia Questions and Answers

var questions = [{
    question: "1. What’s the name of Napoleon’s llama in 'Napoleon Dynamite'?",
    choices: ["Pedro", "Gina", "Tina", "LaFawnduh"],
    answer: 2,
},
{
    question: "2. Which Destiny's Child member was the first to have a solo Billboard No. 1 single?",
    choices: ["Beyonce", "Michelle Williams", "LaTavia Roberson", "Kelly Rowland"],
    answer: 3,
},
{
    question: "3. What is Myspace Tom’s full name?",
    choices: ["Tom Anderson", "Thomas Baker", "Tom Baker", "Thomas Jones"],
    answer: 0,
},
{
    question: "4. In 'Mean Girls,' which Missy Elliot song is playing when Janis and Damian tell Cady about the Plastics?",
    choices: ["Work It", "Pass That Dutch", "Get Ur Freak On", "Lose Control"],
    answer: 1,
},
{
    question: "5. What did Paris Hilton think Walmart sold?",
    choices: ["Children's Toys", "Pets", "Wall Stuff", "She didn't think it was a real store"],
    answer: 2,
},
{
    question: "6. Who was the first American Idol winner",
    choices: ["Ruben Studdard", "Justin Guarini", "Clay Aiken", "Kelly Clackson"],
    answer: 3,
},
{
    question: "7. What was the first video uploaded to YouTube?",
    choices: ["Badass Snowboarding", "Me at the zoo", "Never Gonna Give You Up", "Flambe Disaster"],
    answer: 1,
},
{
    question: "8. How many weeks was Eminem’s “Lose Yourself” No. 1 on Billboard?",
    choices: ["10", "14", "8", "12"],
    answer: 0,
}];

var timer;

var game = {
    questions: questions,
    currentQuestion: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    counter: countStartNumber,


    // Timer Function

    countdown: function() {
        this.counter--;
        $("#counter-number").text(this.counter);
        if (this.counter === 0) {
            console.log("TIME UP");
        }
    },


    // Function to loop through and display questions
    loadQuestions: function() {
        timer = setInterval(this.countdown(this), 1000);
        
        card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

        for (i = 0; i < questions[this.currentQuestion].choices.length; i++) {
            card.append("<button class='answer-button' id='button' dataname='" + questions[this.currentQuestion].choices[i] + "'>" + questions[this.currentQuestion].choices[i] + "</button>")
        }
    },
    

    //Create a start button - I don't think this is how this is supposed to work, but it does?
    // $(".container2").hide();
    // $(".container3").hide();
    // $("#start").on("click", function () {
    // loadQuestions();
    // $(".container1").hide();
    // $(".container2").show();
    // });

    //Create submit button
    // $("#submit").on("click", function () {

    // }
    //Check to see how many correct, incorrect, and unanswered questions
    //Run a loop for both questions and answers
    //Check to see if userGuess and correct answer are equal
    //Run a function to do this for all of the questions
    //Sort into log section



    //Create restart button - again, I don't think this is how it's supposed to work, but I am very lost on this project
    // $("#reset").on("click", function () {
    // $(".container1").show();
    // $(".container2").hide();
    // $(".container3").hide();
    // });

};

// Start button
$(document).on("click", "#start", function() {
    $("#timer").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
  game.loadQuestions();
});