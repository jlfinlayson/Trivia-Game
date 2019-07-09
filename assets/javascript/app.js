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
},
];

var log = {
    correctAnswers: 0,
    incorrectAnswers: 0,
    unanswered: 0,
}

//Make timer run once game starts
//Create a function to see trivia questions
function loadQuestions () {
//Create a loop to go through & show questions
for (i = 0; i < questions.length; i++) {
    console.log(questions[i]);
    $(".questions-text").append("<p>" + questions[i].question + "</p>")
    //Create a loop to go through & show choices
    for (j = 0; j < questions[i].choices.length; j++) {
        //Create buttons for answers
        var userChoices = questions[i].choices[j];
        $(".questions-text").append("<div id='Guesses" + i + j + "'></div>");
        $(".questions-text").append("<p>" + userChoices + "</p>")

        var radioBtn = $("<input type='radio' name=''/>");
        radioBtn.appendTo('#Guesses' + i + j);

    }
    }
}

//Create a start button
$(".container2").hide();
$(".container3").hide();
$("#start").on("click", function(){
    loadQuestions();
    $(".container1").hide();
    $(".container2").show();
});
//Create submit button

//Check to see how many correct, incorrect, and unanswered questions
//Create restart button