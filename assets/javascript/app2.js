// warbler quiz

//globals
var currentQuestion;
var rightAnswer;
var incorrectAnswer;
var unanswered;
var seconds;
var time;
var answered;
var userSelect;

//messages to display
var messages = {
    correct: "You got it!",
    incorrect: "Sorry, but that wasn't it,",
    endTime: "Time's Up!",
    finished: "Let's see how well you know your birds."
}

//start button to start game and timer
$('#startBtn').on('click', function(){
    $(this).hide();
    $('#header').hide();
    $('.jumbotron').hide();
    newGame();
});

//button to start over
$('#startOverButton').on('click', function(){
    $(this).hide();
    newGame();
});

//game function
function newGame(){
    $('#finalMessage').empty();
    $('#correctAnswers').empty();
    $('#incorrectAnswers').empty();
    $('#unanswered').empty();
    currentQuestion = 0;
    rightAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    newQuestion()
}

function newQuestion(){
    $('#message').empty();
    $('#correctedAnswer').empty();
    $('#image').empty();
    answered = true;

        //sets up question and answer list
        
        $('#question').html('<img src="' + myQuestions[currentQuestion].question + '" width:"400px" >');
        $('#currentQuestion').html('Question '+(currentQuestion+1)+' of '+myQuestions.length);
      
        for ( var i = 0; i < 4; i++){
            var choices =$('<div>');
            choices.text(myQuestions[currentQuestion].possAnswers[i]);
            choices.attr({'data-index': i});
            choices.addClass('thisChoice');
            $('#answerList').append(choices);
        }
            countdown();
            //pauses time and sets up answer page
            $('.thisChoice').on('click', function() {
                userSelect = $(this).data('index');
                clearInterval(time);
                answerPage();
            
        });
}

function countdown(){
    seconds = 20;
    $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    answered = true;
    time = setInterval(showCountdown,1000);
}

function showCountdown(){
    seconds--;
    $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
        if(seconds < 1){
            clearInterval(time);
            answered = false;
            answerPage();
    }

}

function answerPage(){
    $('#currentQuestion').empty();
    $('.thisChoice').empty();
    $('#question').empty();

        var rightAnswerText = myQuestions[currentQuestion].possAnswers[myQuestions[currentQuestion].correctAnswer];
        var rightAnswerIndex = myQuestions[currentQuestion].correctAnswer;
        //should show a smaller version of the photo,  may have to change
        $('#image').html('<img src = "' + myQuestions[currentQuestion].question + '" width ="350px"></div>');
        $('#progressBar').attr("style","width: "+ myQuestions[currentQuestion].progress+"%" );

        //checks answer
        if ((userSelect == rightAnswerIndex) && (answered == true)){
            rightAnswer++;
            $('#message').html(messages.correct);
            $('#correctedAnswer').html(+ rightAnswerText);
            
        } else if ((userSelect!== rightAnswerIndex) && (answered=true)){
            incorrectAnswer++;
            $('#message').html(messages.incorrect);
            $('#correctedAnswer').html('It is a ' + rightAnswerText);
        } else {
            unanswered++;
            $('#message').html(messages.endTime);
            $('#correctedAnswer').html('It is a ' + rightAnswerText);
            answered = true;
        }

        if(currentQuestion == (myQuestions.length-1)){
            setTimeout(endGame, 4000)
        } else {
            currentQuestion++;
            setTimeout(newQuestion, 4000);
        }
        
    }
    
    function endGame(){
        $('#timeLeft').empty();
        $('#message').empty();
        $('#correctedAnswer').empty();
        $('#image').empty();
        $('#finalMessage').html(messages.finished)
        $('#correctAnswers').html("Correct Answers: " + rightAnswer);
        $('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
        $('#unanswered').html("unanswered: " + unanswered);
        $('#startOverButton').addClass('btn btn-warning');
        $('#startOverButton').show();
        $('#startOverButton').html('Try Again?');
        
    };

        //add jquery to change #progress-bar.attr aria with progress from question arrayls

const myQuestions = [
    {
        question: "./assets/images/aPine.jpg",
        possAnswers: [
             "Yellow-Throated Warbler",
             "Palm Warbler",
             "Pine Warbler",
             "Prairie Warbler"
        ], 
            correctAnswer: 2,
            progress: "7"
    },
    
    {
        question: "./assets/images/bGrac.jpg",
        possAnswers: [
             "MacGillivray's Warbler",
             "Grace's Wabler",
             "Mourning Warbler",
             "Black-and-White Warbler"
        ],
            correctAnswer: 1,
            progress: "14"
    },   

    {
        question: "./assets/images/cVirg.jpg",
        possAnswers: [
             "Orange-Crowned Warbler",
             "Lucy's Wabler",
             "Connecticut Warbler",
             "Virginia's Warbler"
        ],
            correctAnswer: 3,
            progress: "21"
    },   

    {
        question: "./assets/images/dPalm.jpg",
        possAnswers: [
             "Pine Warbler",
             "Palm Warbler",
             "Kirtland's Warbler",
             "Swamp Warbler"
        ],
            correctAnswer: 1,
            progress: "28"
    },   

    {
        question: "./assets/images/Eprai.jpg",
        possAnswers: [
             "Prairie Warbler",
             "Connecticut Warbler",
             "Tropical Parula",
             "Golden-Winged Warbler"
        ],
            correctAnswer: 0,
            progress: "35"
    },   

    {
        question: "./assets/images/fHerm.jpg",
        possAnswers: [
             "Townsend's Warbler",
             "Yellow-Rumped Warbler",
             "Hermit Warbler",
             "Golden-Cheeked Warbler"
        ],
            correctAnswer: 2,
            progress: "42"
    },   

    {
        question: "./assets/images/gBtgr.jpg",
        possAnswers: [
             "Blue-Throated Gray Warbler",
             "Black-Throated Gray Warbler",
             "Black-Throated Green Warbler",
             "Black-and-White Warbler"
        ],
            correctAnswer: 1,
            progress: "50"
    },   

    {
        question: "./assets/images/hTenn.jpg",
        possAnswers: [
             "Nashville Warbler",
             "Orange-Crowned Warbler",
             "Mourning Warbler",
             "Tennessee Warbler"
        ],
            correctAnswer: 3,
            progress: "56"
    },   

    {
        question: "./assets/images/iKirt.jpg",
        possAnswers: [
             "Kirtland's Warbler",
             "Palm Warbler",
             "Townsend's Warbler",
             "Pine Warbler"
        ],
            correctAnswer: 0,
            progress: "63"
    },   

    {
        question: "./assets/images/jLucy.jpg",
        possAnswers: [
             "Orange-Crowned Warbler",
             "Grace's Warbler",
             "Lucy's Warbler",
             "Virginia's Warbler"
        ],
            correctAnswer: 2,
            progress: "70"
    },   

    {
        question: "./assets/images/kYRWA.jpg",
        possAnswers: [
             "Townsend's Warbler",
             "Hermit Warbler",
             "Prairie Warbler",
             "Yellow-Rumped Warbler"
        ],
            correctAnswer: 3,
            progress: "77"
    },   

    {
        question: "./assets/images/lChest.jpg",
        possAnswers: [
             "Chestnut-Sided Warbler",
             "Blue-Winged Warbler",
             "Tennesee Warbler",
             "Connecticut Warbler"
        ],
            correctAnswer: 0,
            progress: "84"
    },   

    {
        question: "./assets/images/mYTWA.jpg",
        possAnswers: [
             "Yellow-Rumped Warbler",
             "Common Yellowthroat",
             "Yellow-Throated Warbler",
             "Pine Warbler"
        ],
            correctAnswer: 2,
            progress: "93"
    }, 
    
    {
        question: "./assets/images/nOven.jpg",
        possAnswers: [
             "Lousianna Waterthrush",
             "Ovenbird",
             "Prairie Warbler",
             "Bakerbird"
        ],
            correctAnswer: 1,
            progress: "100"
    },   
];





// make const for questions and answers


// countdown timer, 20 seconds per question 

//correct answer add to ones right, change font to green switch after 4 seconds?

//incorrect answer add to ones wrong, chanage font to red switch after 4 seconds?

//score percentage correct in end screen. 

//restart button?

//reset f()