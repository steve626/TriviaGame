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
    myQuestions.forEach(
        (currentQuestion, questionNumber) =>{
        const answers = [];

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



const myQuestions = [
    {
        question: url("../assets/images/aPine.jpg"),
        answers: {
                a: "Yellow-Throated Warbler",
                b: "Palm Warbler",
                c: "Pine Warbler",
                d: "Prairie Warbler"
        }, 
            correctAnswer: 2,
            progress: "7"
    },
    
    {
        question: url("../assets/images/bGrace.jpg"),
        answers: {
            a: "MacGillivray's Warbler",
            b: "Grace's Wabler",
            c: "Mourning Warbler",
            d: "Black-and-White Warbler"
        },
            correctAnswer: "b",
            progress: "14"
    },   

    {
        question: url("../assets/images/cVirg.jpg"),
        answers: {
            a: "Orange-Crowned Warbler",
            b: "Lucy's Wabler",
            c: "Connecticut Warbler",
            d: "Virginia's Warbler"
        },
            correctAnswer: "d",
            progress: "21"
    },   

    {
        question: url("../assets/images/dPalm.jpg"),
        answers: {
            a: "Pine Warbler",
            b: "Palm Warbler",
            c: "Kirtland's Warbler",
            d: "Swamp Warbler"
        },
            correctAnswer: "b",
            progress: "28"
    },   

    {
        question: url("../assets/images/Eprai.jpg"),
        answers: {
            a: "Prairie Warbler",
            b: "Connecticut Warbler",
            c: "Tropical Parula",
            d: "Golden-Winged Warbler"
        },
            correctAnswer: "a",
            progress: "35"
    },   

    {
        question: url("../assets/images/fHerm.jpg"),
        answers: {
            a: "Townsend's Warbler",
            b: "Yellow-Rumped Warbler",
            c: "Hermit Warbler",
            d: "Golden-Cheeked Warbler"
        },
            correctAnswer: "c",
            progress: "42"
    },   

    {
        question: url("../assets/images/gBtgr.jpg"),
        answers: {
            a: "Blue-Throated Gray Warbler",
            b: "Black-Throated Gray Warbler",
            c: "Black-Throated Green Warbler",
            d: "Black-and-White Warbler"
        },
            correctAnswer: "b",
            progress: "50"
    },   

    {
        question: url("../assets/images/hTenn.jpg"),
        answers: {
            a: "Nashville Warbler",
            b: "Orange-Crowned Warbler",
            c: "Mourning Warbler",
            d: "Tennessee Warbler"
        },
            correctAnswer: "d",
            progress: "56"
    },   

    {
        question: url("../assets/images/iKirt.jpg"),
        answers: {
            a: "Kirtland's Warbler",
            b: "Palm Warbler",
            c: "Townsend's Warbler",
            d: "Pine Warbler"
        },
            correctAnswer: "a",
            progress: "63"
    },   

    {
        question: url("../assets/images/jLucy.jpg"),
        answers: {
            a: "Orange-Crowned Warbler",
            b: "Grace's Warbler",
            c: "Lucy's Warbler",
            d: "Virginia's Warbler"
        },
            correctAnswer: "c",
            progress: "70"
    },   

    {
        question: url("../assets/images/kYRWA.jpg"),
        answers: {
            a: "Townsend's Warbler",
            b: "Hermit Warbler",
            c: "Prairie Warbler",
            d: "Yellow-Rumped Warbler"
        },
            correctAnswer: "d",
            progress: "77"
    },   

    {
        question: url("../assets/images/lChest.jpg"),
        answers: {
            a: "Chestnut-Sided Warbler",
            b: "Blue-Winged Warbler",
            c: "Tennesee Warbler",
            d: "Connecticut Warbler"
        },
            correctAnswer: "a",
            progress: "84"
    },   

    {
        question: url("../assets/images/mYTWA.jpg"),
        answers: {
            a: "Yellow-Rumped Warbler",
            b: "Common Yellowthroat",
            c: "Yellow-Throated Warbler",
            d: "Pine Warbler"
        },
            correctAnswer: "c",
            progress: "93"
    }, 
    
    {
        question: url("../assets/images/nOven.jpg"),
        answers: {
            a: "Lousianna Waterthrush",
            b: "Ovenbird",
            c: "Prairie Warbler",
            d: "Bakerbird"
        },
            correctAnswer: "b",
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