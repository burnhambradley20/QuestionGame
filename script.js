var startButton = document.getElementById('startButton');
var questionElement = document.getElementById('questions');
var questionButton1 = document.getElementById('questionbutton1');
var questionButton2 = document.getElementById('questionbutton2');
var questionButton3 = document.getElementById('questionbutton3');
var winElement = document.getElementById('win');
var loseElement = document.getElementById('lose');
var timebox = document.getElementById('timebox');

var questions = [
    {
        questions:'What year was the internet invented?',
        answers: [
            { text: '1945', correct: false },
            { text: '1983', correct: true },
            { text: '1776', correct: false }
        ]
    },
    {
        questions:'Who invented gun powder?',
        answers:[
            { text: 'China', correct: true },
            { text: 'Romans', correct: false },
            { text: 'Canada', correct: false }
        ]
    },
    {
        questions:'How much does an elephant heart weigh?',
        answers:[
            { text: '15 pounds', correct: false },
            { text: '50 pounds', correct: false },
            { text: '30 pounds', correct: true }
        ]
    },
    {
        questions:'Where was apple pie invented?',
        answers:[
            { text: 'USA', correct: false },
            { text: 'India', correct: false },
            { text: 'England', correct: true }
        ]
    },
    {
        questions:'What is Scotlands national animal?',
        answers:[
            { text: 'Mole Rat', correct: false },
            { text: 'Unicorn', correct: true },
            { text: 'Puffin', correct: false }
        ]
    }

]

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.disabled = true;
    console.log('Started');
    let i = 0
    while (i < questions.length) {
        console.log(questions);
        console.log(questions[i].questions);
       document.getElementById('line29').textContent = (questions[i].questions);
       i++
    }
} 

questionButton1.addEventListener('click', questionBox1)
questionButton2.addEventListener('click', questionBox2)
questionButton3.addEventListener('click', questionBox3)

function questionBox1() {
    console.log()
    let i = 0
    while (i < answers.length) {
        console.log(questions.answers); 
        console.log(answers[1].answers)
        document.getElementById('questionbutton1').textContent = (questions.answers[1])
        i++
        
    }
}

function questionBox2() {
    console.log('text2'); 
}

function questionBox3() {
    console.log('text3');
}

