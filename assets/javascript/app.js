$(document).ready(function(){















    $("body").on("click", ".start", function(){	    
		    $(".start").hide();
		    showQuestion();
		    timer();
    });
    
    $("body").on("click", ".option", function(event){
	answer = $(this).attr("id");
	if( answer === triviaArray[questionCounter].answer) {
		//alert("correct");

		clearInterval(clock);
		win();
	}
	else {
		//alert("wrong answer!");
		clearInterval(clock);
		loss();
	}
}); // Close .answer click










}); //closing jquery operator

function wait() {
	if (questionCounter < 21) 
	{
	questionCounter++;
	counter = 3;
	showQuestion();
	timer();
	}
	else {
		// finalScreen();
	}
}

function timer() {
	clock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(clock);
			timeOutLoss();
		}
		if (counter > 0) {
			counter--;
		}
		$(".time-rem").html(counter);
	}
}

function win() {
	$(".time-rem").html('correct');
	$('#o1').html('');
    $('#o2').html('');
    $('#o3').html('');
    $('#o4').html('');
	setTimeout(wait, 4000);  //  change to 4000 or other amount
}

function loss() {
	$(".time-rem").html('incorrect');
	$('#o1').html('');
    $('#o2').html('');
    $('#o3').html('');
    $('#o4').html('');
	setTimeout(wait, 4000); //  change to 4000 or other amount
}
	    


function showQuestion() {
	$('.time-rem').html(counter);
    $('.question').html(triviaArray[questionCounter].question);
    $('#o1').html(triviaArray[questionCounter].option1);
    $('#o2').html(triviaArray[questionCounter].option2);
    $('#o3').html(triviaArray[questionCounter].option3);
    $('#o4').html(triviaArray[questionCounter].option4);

	       
}


function timeOutLoss() {
	$(".question").html('the correct answer was');
	$('#o1').html('');
    $('#o2').html('');
    $('#o3').html('');
    $('#o4').html('');
	setTimeout(wait, 4000);  
}



var questionCounter = 0;
var counter = 3;



// game objects
var triviaArray = [
     {
     questionNumber: 1,
     img: "assets/images/henn2.jpg",
     question: "What is the name of the alcoholic beverage that cannot be detected on the breath?",
     option1: "Hennigans",
     option2: "Schnapps",
     option3: "Schneigals",
     option4: "Smirnoff",
     answer:"o1"
},
     {
     questionNumber: 2,
     img: "assets/images/rocky.jpeg",
     question: "What are the names of the 'street tuffs' constantly harassing Kramer?",
     option1: "Raul and Chicano",
     option2: "Martin and Jose",
     option3: "Cedric and Bob",
     option4: "Dylan and Paul",
     answer:"o3"
},
{
     questionNumber: 3,
     img: "assets/images/rocky.jpeg",
     question: "What is the name of Elaine's sister?",
     option1: "Debra",
     option2: "Madison",
     option3: "Helen",
     option4: "Gail",
     answer:"o4"
},
{
     questionNumber: 4,
     img: "assets/images/rocky.jpeg",
     question: "",
     option1: "",
     option2: "",
     option3: "",
     option4: "",
     answer:"o2"
},
{
     questionNumber: 5,
     img: "assets/images/rocky.jpeg",
     question: "",
     option1: "",
     option2: "",
     option3: "",
     option4: "",
     answer:"o1"
},
{
     questionNumber: 6,
     img: "assets/images/rocky.jpeg",
     question: "",
     option1: "",
     option2: "",
     option3: "",
     option4: "",
     answer:"o4"
},
{
     questionNumber: 7,
     img: "assets/images/rocky.jpeg",
     question: "",
     option1: "",
     option2: "",
     option3: "",
     option4: "",
     answer:"o1"
},
{
     questionNumber: 8,
     img: "assets/images/rocky.jpeg",
     question: "",
     option1: "",
     option2: "",
     option3: "",
     option4: "",
     answer:"o4"
},
{
     questionNumber: 9,
     img: "assets/images/rocky.jpeg",
     question: "",
     option1: "",
     option2: "",
     option3: "",
     option4: "",
     answer:"o3"
},
{
     questionNumber: 10,
     img: "assets/images/rocky.jpeg",
     question: "",
     option1: "",
     option2: "",
     option3: "",
     option4: "",
     answer:"o2"
},
{
     questionNumber: 11,
     img: "assets/images/rocky.jpeg",
     question: "",
     option1: "",
     option2: "",
     option3: "",
     option4: "",
     answer:"o1"
},
{
     questionNumber: 12,
     img: "assets/images/rocky.jpeg",
     question: "",
     option1: "",
     option2: "",
     option3: "",
     option4: "",
     answer:"o4"
},
{
     questionNumber: 13,
     img: "assets/images/rocky.jpeg",
     question: "",
     option1: "",
     option2: "",
     option3: "",
     option4: "",
     answer:"o4"
},
{
     questionNumber: 14,
     img: "assets/images/rocky.jpeg",
     question: "",
     option1: "",
     option2: "",
     option3: "",
     option4: "",
     answer:"o3"
},
{
     questionNumber: 15,
     img: "assets/images/rocky.jpeg",
     question: "",
     option1: "",
     option2: "",
     option3: "",
     option4: "",
     answer:"o1"
},
{
     questionNumber: 16,
     img: "assets/images/rocky.jpeg",
     question: "",
     option1: "",
     option2: "",
     option3: "",
     option4: "",
     answer:"o3"
},
{
     questionNumber: 17,
     img: "assets/images/rocky.jpeg",
     question: "",
     option1: "",
     option2: "",
     option3: "",
     option4: "",
     answer:"o4"
},
{
     questionNumber: 18,
     img: "assets/images/rocky.jpeg",
     question: "",
     option1: "",
     option2: "",
     option3: "",
     option4: "",
     answer:"o1"
},
{
     questionNumber: 19,
     img: "assets/images/rocky.jpeg",
     question: "",
     option1: "",
     option2: "",
     option3: "",
     option4: "",
     answer:"o3"
},
{
     questionNumber: 20,
     img: "assets/images/rocky.jpeg",
     question: "",
     option1: "",
     option2: "",
     option3: "",
     option4: "",
     answer:"o2"
}
];


