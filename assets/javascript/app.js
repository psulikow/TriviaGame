$(document).ready(function(){

    $("body").on("click", ".start", function(){	    
		    $(".start").hide();
		    showQuestion();
		    timer();
    });

    $("body").on("click", ".start-over", function(){
		    $(".start-over").hide();
		    resetGame();
    });
    
    $("body").on("click", ".option", function(event){
	answer = $(this).attr("id");
	if( answer === triviaArray[questionCounter].answer) {
		clearInterval(clock);
		win();
	}
	else {
		clearInterval(clock);
		loss();
	}
	}); // Close .answer click

}); //closing jquery operator

function wait() {
	if (questionCounter < 20) 
	{
		console.log(questionCounter);
		questionCounter++;
		console.log(questionCounter);
		counter = 20;
		showQuestion();
		timer();
	}
	else {
		finalScreen();
	}
}

function timer() {
	clock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(clock);
			timeOutLoss();
		}
		else if (counter > 0) {
			counter--;
		}
	$(".time-rem").html(counter);
	}
}

function win() {
	correctCnt++;
	$(".status").html('Correct!!');
	$(".answer").html(triviaArray[questionCounter].textAns);
	$(".question").html(triviaArray[questionCounter].img);
	$('#o1').html('');
    $('#o2').html('');
    $('#o3').html('');
    $('#o4').html('');
	setTimeout(wait, 3000);  //  change to 4000 or other amount
}

function loss() {
	incorrectCnt++;
	$(".status").html('Incorrect! The correct answer was:');
	$(".answer").html(triviaArray[questionCounter].textAns);
	$(".question").html(triviaArray[questionCounter].img);
	$('#o1').html('');
    $('#o2').html('');
    $('#o3').html('');
    $('#o4').html('');
	setTimeout(wait, 3000); //  change to 4000 or other amount
}
	    
function showQuestion() {
	$('.time-rem').html(counter);
	$(".status").html('');
	$(".answer").html('');
    $('.question').html(triviaArray[questionCounter].question);
    $('#o1').html(triviaArray[questionCounter].option1);
    $('#o2').html(triviaArray[questionCounter].option2);
    $('#o3').html(triviaArray[questionCounter].option3);
    $('#o4').html(triviaArray[questionCounter].option4);	       
}

function timeOutLoss() {
	unansweredCnt++;
	$(".status").html('Time up!  The correct answer was:');
	$(".answer").html(triviaArray[questionCounter].textAns);
	$(".question").html(triviaArray[questionCounter].img);
	$('#o1').html('');
    $('#o2').html('');
    $('#o3').html('');
    $('#o4').html('');
	setTimeout(wait, 3000);  
}

function finalScreen() {

	$('.time-rem').html('');
	$(".status").html('CONGRATS, YOU HAVE REACHED THE END!');
	$(".answer").html('');
    $('.question').html('');
    $('#o1').html('Correct Answers: ' + correctCnt);
    $('#o2').html('Incorrect Answers: ' + incorrectCnt);
    $('#o3').html('Unanswered: ' + unansweredCnt);
    $('.start-over').html('<button type="button" class="btn btn-primary btn-block start-over">START OVER</button>');
	       
}

function resetGame() {
	questionCounter = 0;
	counter = 20;
	correctCnt = 0;
	incorrectCnt = 0;
	unansweredCnt = 0;
	showQuestion();
	timer();
}

var questionCounter = 0;
var counter = 20;
var correctCnt = 0;
var incorrectCnt = 0;
var unansweredCnt = 0;

// game objects
var triviaArray = [
     {
     questionNumber: 1,
     img: "<img class='center-block img-right' src='assets/images/henn2.jpg' height='250' width='250'>",
     question: "What is the name of the alcoholic beverage that cannot be detected on the breath?",
     option1: "Hennigans",
     option2: "Schnapps",
     option3: "Schneigals",
     option4: "Smirnoff",
     answer:"o1",
     textAns: "Hennigans" 
},
     {
     questionNumber: 2,
     img: "<img class='center-block img-right' src='assets/images/cb.jpg' height='250' width='250'>",
     question: "What are the names of the 'street tuffs' constantly harassing Kramer?",
     option1: "Raul and Chicano",
     option2: "Martin and Jose",
     option3: "Cedric and Bob",
     option4: "Dylan and Paul",
     answer:"o3",
     textAns: "Cedric and Bob"
},
{
     questionNumber: 3,
     img: "<img class='center-block img-right' src='assets/images/liljerry.jpg' height='250' width='250'>",
     question: "What was \"Little Jerry\"?",
     option1: "Kramer's pet rooster",
     option2: "Kramer's pet chicken",
     option3: "A picture of Jerry as a litte kid",
     option4: "What Jerry's dad calls him",
     answer:"o1",
     textAns: "Kramer's pet rooster"
},
{
     questionNumber: 4,
     img: "<img class='center-block img-right' src='assets/images/fusilli.jpeg' height='250' width='250'>",
     question: "What kind of pasta does Kramer make a Jerry figurine from?",
     option1: "Penne",
     option2: "Fusilli",
     option3: "Tortellini",
     option4: "Angel Hair",
     answer:"o2",
     textAns: "Fusilli"
},
{
     questionNumber: 5,
     img: "<img class='center-block img-right' src='assets/images/shower.jpg' height='250' width='250'>",
     question: "What does Kramer have installed in his shower?",
     option1: "A television",
     option2: "A radio",
     option3: "A garbage disposal",
     option4: "A toilet",
     answer:"o3",
     textAns: "A garbage disposal"
},
{
     questionNumber: 6,
     img: "<img class='center-block img-right' src='assets/images/kramer.jpg' height='250' width='250'>",
     question: "What is Kramer's first name?",
     option1: "Joe",
     option2: "Frank",
     option3: "Xavier",
     option4: "Cosmo",
     answer:"o4",
     textAns: "Cosmo"
},
{
     questionNumber: 7,
     img: "<img class='center-block img-right' src='assets/images/buck.png' height='250' width='250'>",
     question: "If George were a porn star what did he say his name would be?",
     option1: "Buck Naked",
     option2: "Ron Jeremy",
     option3: "Van Johnson",
     option4: "Peter Dong",
     answer:"o1",
     textAns: "Buck Naked"
},
{
     questionNumber: 8,
     img: "<img class='center-block img-right' src='assets/images/art.jpg' height='250' width='250'>",
     question: "What is the name George always uses as a secret identity?",
     option1: "Bob Sacamano",
     option2: "Art Vandelay",
     option3: "Corky Romero",
     option4: "Micky Thompson",
     answer:"o2",
     textAns: "Art Vandelay"
},
{
     questionNumber: 9,
     img: "<img class='center-block img-right' src='assets/images/fe.jpg' height='250' width='250'>",
     question: "What are George's parents names?",
     option1: "Mike and Molly",
     option2: "Steve and Karen",
     option3: "Morty and Helen",
     option4: "Frank and Estelle",
     answer:"o4",
     textAns: "Frank and Estelle"
},
{
     questionNumber: 10,
     img: "<img class='center-block img-right' src='assets/images/drake.jpg' height='250' width='250'>",
     question: "What did the group but The Drake for his engagement present?",
     option1: "Massaging chair",
     option2: "Big screen TV",
     option3: "Car",
     option4: "Coffee table",
     answer:"o2",
     textAns: "Big screen TV"


},
{
     questionNumber: 11,
     img: "<img class='center-block img-right' src='assets/images/hop.jpg' height='250' width='250'>",
     question: "Elaine got her communist boyfriend black-listed from what restaurant?",
     option1: "Hop Sings",
     option2: "Monks",
     option3: "Joes Diner",
     option4: "Mendys",
     answer:"o1",
     textAns: "Hop Sings"



},
{
     questionNumber: 12,
     img: "<img class='center-block img-right' src='assets/images/spit.jpg' height='250' width='250'>",
     question: "In the phenomenon of the \"second spitter\" there was someone on the grassy knoll. Who was it?",
     option1: "Darry Strawberry",
     option2: "Buck Showalter",
     option3: "Roger McDowell",
     option4: "Keith Hernandez",
     answer:"o3",
     textAns: "Roger McDowell"


},
{
     questionNumber: 13,
     img: "<img class='center-block img-right' src='assets/images/frog.jpg' height='250' width='250'>",
     question: "What are George's initials? As see in the \"Frogger\" episode?",
     option1: "GIC",
     option2: "GJC",
     option3: "GDC",
     option4: "GLC",
     answer:"o4",
     textAns: "GLC"
},
{
     questionNumber: 14,
     img: "<img class='center-block img-right' src='assets/images/leo.jpg' height='250' width='250'>",
     question: "In Jerry's dream of Uncle Leo in prison, what did Uncle Leo have tattooed on his fingers?",
     option1: "Save Leo!",
     option2: "Cape Fear",
     option3: "Jerry Hello",
     option4: "Help Me",
     answer:"o3",
     textAns: "Jerry Hello"
},
{
     questionNumber: 15,
     img: "<img class='center-block img-right' src='assets/images/nat.jpg' height='250' width='250'>",
     question: "Elaine disapproves of a boutique with a mannequin, what name did she call the snobby woman working there?",
     option1: "Natasha",
     option2: "Shaniqua",
     option3: "Michelle",
     option4: "Wanda",
     answer:"o1",
     textAns: "Natasha"
},
{
     questionNumber: 16,
     img: "<img class='center-block img-right' src='assets/images/ped.jpg' height='250' width='250'>",
     question: "Where did Elaine have to travel to get Peterman's signature for an expense?",
     option1: "Malaysia",
     option2: "Burma",
     option3: "Cambodia",
     option4: "Vietnam",
     answer:"o2",
     textAns: "Burma"
},
{
     questionNumber: 17,
     img: "<img class='center-block img-right' src='assets/images/tony.jpg' height='250' width='250'>",
     question: "What was the mechanic's name that stole Jerry's car?",
     option1: "Puddy",
     option2: "Rick",
     option3: "Stan",
     option4: "Tony",
     answer:"o4",
     textAns: "Tony"
},
{
     questionNumber: 18,
     img: "<img class='center-block img-right' src='assets/images/good.jpg' height='250' width='250'>",
     question: "If you want to make a person feel better after they sneeze, you shouldn't say 'God bless you.' You should say...",
     option1: "You're so good looking",
     option2: "Feel better",
     option3: "Hey there",
     option4: "Bless you",
     answer:"o1",
     textAns: "You're so good looking"
},
{
     questionNumber: 19,
     img: "<img class='center-block img-right' src='assets/images/monk.jpg' height='250' width='250'>",
     question: "What is the name of the coffee shop the gang hangs out in?",
     option1: "Charlie's",
     option2: "Monk's",
     option3: "Reggies",
     option4: "Newman's",
     answer:"o2",
     textAns: "Monk's"
},
{
     questionNumber: 20,
     img: "<img class='center-block img-right' src='assets/images/fest.jpg' height='250' width='250'>",
     question: "What holiday did George's father create as an alternative holiday to Christmas",
     option1: "Buy nothing day",
     option2: "Kwanzakkah",
     option3: "Festivus",
     option4: "Christmachanukah",
     answer:"o3",
     textAns: "Festivus"
},
{
     questionNumber: 21,
     img: "<img class='center-block img-right' src='assets/images/assman.jpg' height='250' width='250'>",
     question: "What is on the vanity plates that Kramer accidentally receives from the DMV?",
     option1: "BIG BOY",
     option2: "ASSMAN",
     option3: "DR. LOVE",
     option4: "BABU",
     answer:"o2",
     textAns: "ASSMAN"
}
];


