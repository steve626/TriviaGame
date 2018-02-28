// warbler quiz

//globals
var question = document.getElementById('photo');
// var a = document.getElementById('ans-A');
// var b = document.getElementById('ans-B')
// var c = document.getElementById('ans-C')
// var d = document.getElementById('ans-D')




//make functions for gameplay

function buildQuiz(){
    //place to store html output
    var output = [];
    
    //for each question:
    myQuestions.forEach((currentQuestion, questionNumber) =>{const answers = [];

        //for available answers
        for(letter in currentQuestion.answers){

            //add buttons for answers
            answers.push(
                `<label>
                <input type="button" class="btn btn-success" name="questions${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        //add questions and answers to output
        output.push(
            `<div class="photo"> ${currentQuestion.question}</div>
            <div class="answers"> ${answers.join('')}</div>`
            );
        }
    );

    //combine output lists into html for display
        quizContainer.innerHTML = output.join('');

        }
        

function showResults(){
    //collects anwers
    var containers = quizContainer.querySelectorAll('.answers');

    //track user's answers
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber)=>{

        //find selected answer
       const container = containers[questionNumber];
       const selector = "input[name=question'+questionNumber+']:checked";
       const userAnswer = (container.querySelector(selector) ||{}).value;

        //if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
    
            numCorrect++;

            containers[questionNumber].style.color = "green";
        } else{
            containers[questionNumber].style.color = "red";
        }
        });

        resultsConatiner.innerHTML = numCorrect + ' out of ' + myQuestions.length;
    }

        //add jquery to change #progress-bar.attr aria with progress from question array

const myQuestions = [
    {
        question: url("../assets/images/aPine.jpg"),
        answers: [
             "Yellow-Throated Warbler",
             "Palm Warbler",
             "Pine Warbler",
             "Prairie Warbler"
        ], 
            correctAnswer: 2,
            progress: "7"
    },
    
    {
        question: url("../assets/images/bGrace.jpg"),
        answers: [
             "MacGillivray's Warbler",
             "Grace's Wabler",
             "Mourning Warbler",
             "Black-and-White Warbler"
        ],
            correctAnswer: 1,
            progress: "14"
    },   

    {
        question: url("../assets/images/cVirg.jpg"),
        answers: [
             "Orange-Crowned Warbler",
             "Lucy's Wabler",
             "Connecticut Warbler",
             "Virginia's Warbler"
        ],
            correctAnswer: 3,
            progress: "21"
    },   

    {
        question: url("../assets/images/dPalm.jpg"),
        answers: [
             "Pine Warbler",
             "Palm Warbler",
             "Kirtland's Warbler",
             "Swamp Warbler"
        ],
            correctAnswer: 1,
            progress: "28"
    },   

    {
        question: url("../assets/images/Eprai.jpg"),
        answers: [
             "Prairie Warbler",
             "Connecticut Warbler",
             "Tropical Parula",
             "Golden-Winged Warbler"
        ],
            correctAnswer: 0,
            progress: "35"
    },   

    {
        question: url("../assets/images/fHerm.jpg"),
        answers: [
             "Townsend's Warbler",
             "Yellow-Rumped Warbler",
             "Hermit Warbler",
             "Golden-Cheeked Warbler"
        ],
            correctAnswer: 2,
            progress: "42"
    },   

    {
        question: url("../assets/images/gBtgr.jpg"),
        answers: [
             "Blue-Throated Gray Warbler",
             "Black-Throated Gray Warbler",
             "Black-Throated Green Warbler",
             "Black-and-White Warbler"
        ],
            correctAnswer: 1,
            progress: "50"
    },   

    {
        question: url("../assets/images/hTenn.jpg"),
        answers: [
             "Nashville Warbler",
             "Orange-Crowned Warbler",
             "Mourning Warbler",
             "Tennessee Warbler"
        ],
            correctAnswer: 3,
            progress: "56"
    },   

    {
        question: url("../assets/images/iKirt.jpg"),
        answers: [
             "Kirtland's Warbler",
             "Palm Warbler",
             "Townsend's Warbler",
             "Pine Warbler"
        ],
            correctAnswer: 0,
            progress: "63"
    },   

    {
        question: url("../assets/images/jLucy.jpg"),
        answers: [
             "Orange-Crowned Warbler",
             "Grace's Warbler",
             "Lucy's Warbler",
             "Virginia's Warbler"
        ],
            correctAnswer: 2,
            progress: "70"
    },   

    {
        question: url("../assets/images/kYRWA.jpg"),
        answers: [
             "Townsend's Warbler",
             "Hermit Warbler",
             "Prairie Warbler",
             "Yellow-Rumped Warbler"
        ],
            correctAnswer: 3,
            progress: "77"
    },   

    {
        question: url("../assets/images/lChest.jpg"),
        answers: [
             "Chestnut-Sided Warbler",
             "Blue-Winged Warbler",
             "Tennesee Warbler",
             "Connecticut Warbler"
        ],
            correctAnswer: 0,
            progress: "84"
    },   

    {
        question: url("../assets/images/mYTWA.jpg"),
        answers: [
             "Yellow-Rumped Warbler",
             "Common Yellowthroat",
             "Yellow-Throated Warbler",
             "Pine Warbler"
        ],
            correctAnswer: 2,
            progress: "93"
    }, 
    
    {
        question: url("../assets/images/nOven.jpg"),
        answers: [
             "Lousianna Waterthrush",
             "Ovenbird",
             "Prairie Warbler",
             "Bakerbird"
        ],
            correctAnswer: 1,
            progress: "100"
    },   
]
buildQuiz();




// make const for questions and answers


// countdown timer, 20 seconds per question 

//correct answer add to ones right, change font to green switch after 4 seconds?

//incorrect answer add to ones wrong, chanage font to red switch after 4 seconds?

//score percentage correct in end screen. 

//restart button?

//reset f()