$(document).ready(function() {

var triviaSection = [{
	question: "Which movie was not made in the 80's?",
	answerOptions: ["The Breakfast Club", "Revenge of the Nerds", "Ferris Buillers Day Off", "Star Wars Episode 4: A New Hope"],
	answer: 3
}, {
	question: "What color were the Tigers on the cover of Michael Jacksons Thriller?",
	answerOptions: ["White", "Red", "Orange", "Blue"],
	answer: 0
}, {
	question: "What was the best selling album in the US in the 80's",
	answerOptions: ["Micheal Jackson - Thriller", "Whitney Houston - Houston", "AC/DC - Back in Black", "Bruce Springsteen - Born in the U.S.A."],
	answer: 0
},{
	question: "On November 17, 1981, approximately 30 million Americans turned on their televisions to watch which couple get married?",
	answerOptions: ["Prince Andrew and Sarah Ferguson", "Prince Charles and Diana Spencer", "Princess Anee and Mark Phillips", "Luke Spencer and Laura Webber"],
	answer: 3
},{
	question: "Which of these is not the nickname of one of the ghosts featured in the Pac-Man video game?",
	answerOptions: ["Tinky", "Inky", "Blinky", "Pinky"],
	answer: 0
},{
	question: "Which of these songs from Michael Jackson's legendary 1982 Thriller album was not released as a single?",
	answerOptions: ["Pretty Young Thing", "Baby Be Mine", "Human Nature", "The Girl Is Mine"],
	answer: 1
},{
	question: "Cabbage Patch Kids, among the most sought-after toys of all time, were originally called what?",
	answerOptions: ["Little People", "Backyard Babies", "Turnip Tots", "Young Uns"],
	answer: 0
},{
	question: "President Ronald Reagan gave out jars of which candy to White House visitors?",
	answerOptions: ["Jelly Bellys", "Gummi Bears", "Hershey Kisses", "M&Ms"],
	answer: 0
},{
	question: "What is the name of the oldest child on “The Cosby Show”?",
	answerOptions: ["Sondra", "Bobby", "Joey", "Denise"],
	answer: 0
},{
	question: "How much memory did the average computer have in the 80's",
	answerOptions: ["12", "154", "64", "90"],
	answer: 2
}];


var currentQuestion;
var correctAnswer;
var incorrectAnswer;
var unanswered;
var answered;
var userSelect;

var resultMessages = {

	correct: "That's Groovy Baby!",
	incorrect: "That's Totally Not Cool!",
	finished: "Totally psychedelic, Let's see your results!"
}

$('#start').on('click', function(){
	$(this).hide();
	newGame();
});

$('#startOverBtn').on('click', function(){
	$(this).hide();
	newGame();
});

function newGame(){
	$('#endingMessage').empty();
	$('#correctanswerOptions').empty();
	$('#incorrectanswerOptions').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
};

function newQuestion(){
	$('#result').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	answered = true;

	//sets up new questions & answerOptions
	$('#currentQuestion').html('Question #'+(currentQuestion+1)+'/'+triviaSection.length);
	$('.question').html('<h2>' + triviaSection[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(triviaSection[currentQuestion].answerOptions[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerOptions').append(choices);
	};
		$('.thisChoice').on('click',function(){
			userSelect = $(this).data('index');
			answerPage()
		});
};

var correctAnswerText
var correctAnswerIndex

function answerPage(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty(); //Clears question page
	$('.question').empty();

	correctAnswerText = triviaSection[currentQuestion].answerOptions[triviaSection[currentQuestion].answer];
	correctAnswerIndex = triviaSection[currentQuestion].answer;

	if((userSelect == correctAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#result').html(resultMessages.correct);
		var correctGif = '<iframe src="https://giphy.com/embed/XenWVVdSzaxLW" width="480" height="349"></iframe>';
			$('#gif').html(correctGif);
	} else if
	((userSelect != correctAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#result').html(resultMessages.incorrect);
		$('#correctedAnswer').html('The correct answer was: ' + correctAnswerText);
		var incorrectGif = '<iframe src="https://giphy.com/embed/TDnai8jDt7iSI" width="480" height="313"></iframe></iframe>';
			$('#gif').html(incorrectGif);
	}

	if(currentQuestion == (triviaSection.length-1)){
		setTimeout(scoreboard, 5000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 5000);
	}
}

function scoreboard(){
	$('#result').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();

	$('#endingMessage').html(resultMessages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#startOver').addClass('reset');
	$('#startOver').show();
	$('#startOver').html('Restart?');
}

});
