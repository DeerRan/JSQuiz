//Variables for buttons and clock
var scorebtn = document.getElementById('score-btn')
var option1 = document.getElementById('btn-1')
var option2 = document.getElementById('btn-2')
var option3 = document.getElementById('btn-3')
var option4 = document.getElementById('btn-4')
var time = document.getElementById('time')
var results = document.getElementById('result')
var answerset = document.getElementsByClassName('answers')
var question = document.getElementById('Q1')
var startbtn = document.getElementById('start-btn')
var formdiv = document.getElementById('formdiv')
var nameInput = document.getElementById('Name')
var submitbtn = document.getElementById('submit')
var nobtn = document.getElementById('no')
var scoreboard = document.getElementById('scoreboard')

//Timer Countdown
var seconds = 60
time.textContent = 'Timer'

function countdown() {
    time.textContent = seconds + ' second(s)'
    var interval = setInterval(function () {
        seconds--;
        time.textContent = seconds + ' second(s)'

        if (seconds <= 0) {
            clearInterval(interval)
            time.textContent = 'Times Up!'
            return;
        }
        else if (question.id === 'DONE') {
            clearInterval(interval)
            time.textContent = seconds + ' seconds(s)'
            return;
        }
    }, 1000);
}

//Begin Quiz button

startbtn.addEventListener('click', countdown)

//Hiding other buttons until quiz starts
var hide = function () {
    option1.style.display = 'none'
    option2.style.display = 'none'
    option3.style.display = 'none'
    option4.style.display = 'none'
    results.style.display = 'none'
    formdiv.style.display = 'none'
    nameInput.style.display = 'none'
    nobtn.style.display = 'none'
    submitbtn.style.display = 'none'
    scoreboard.style.display = 'none'
}
hide()

//Result Function with true false as right wrong
var outcome = new Boolean(true)
var displaymessage = function () {
    if (outcome === true) {
        results.textContent = 'Correct!'
        results.style.display = 'block'
        setTimeout(function () {
            results.style.display = 'none'
            results.textContent = ''
            return;
        }, 2500)
    }
    else {
        results.textContent = 'Incorrect!'
        results.style.display = 'block'

        setTimeout(function () {
            results.style.display = 'none'
            results.textContent = ''
            return;
        }, 2500)
    }
}

//SCORING STUFF
var playerscore = 0
var points = 0

var addpoints = function () {
    if (outcome === true) {
        points += 5;
    }

    if (question.id === 'DONE') {
        playerscore = points + (seconds / 60) * 25
    }
}

//First Button
option1.addEventListener('click', function () {
    //First Question INCORRECT
    if (question.id === 'Q1') {
        seconds -= 3;
        time.textContent = seconds + ' second(s)';
        question.id = 'Q2'
        outcome = false
        displaymessage(); addpoints()
    }
    //Second Question INCORRECT
    else if (question.id === 'Q2') {
        seconds -= 3;
        time.textContent = seconds + ' second(s)';
        question.id = 'Q3'
        outcome = false
        displaymessage(); addpoints()
    }
    //Third Question INCORRECT
    else if (question.id === 'Q3') {
        seconds -= 3;
        time.textContent = seconds + ' second(s)';
        question.id = 'Q4'
        outcome = false
        displaymessage(); addpoints()
    }
    //Fourth Question CORRECT
    else if (question.id === 'Q4') {
        question.id = 'DONE'
        outcome = true
        displaymessage(); addpoints()
    }
})

//Second Button
option2.addEventListener('click', function () {
    //First Question INCORRECT
    if (question.id === 'Q1') {
        seconds -= 3;
        time.textContent = seconds + ' second(s)';
        question.id = 'Q2'
        outcome = false
        displaymessage(); addpoints()
    }
    //Second Question INCORRECT
    else if (question.id === 'Q2') {
        seconds -= 3;
        time.textContent = seconds + ' second(s)';
        question.id = 'Q3'
        outcome = false
        displaymessage(); addpoints()
    }
    //Third Question CORRECT
    else if (question.id === 'Q3') {
        question.id = 'Q4'
        outcome = true
        displaymessage(); addpoints()
    }
    //Fourth Question INCORRECT
    else if (question.id === 'Q4') {
        seconds -= 3;
        time.textContent = seconds + ' second(s)';
        question.id = 'DONE'
        outcome = false
        displaymessage(); addpoints()
    }
})

//Third Button
option3.addEventListener('click', function () {
    //First Question INCORRECT
    if (question.id === 'Q1') {
        seconds -= 3;
        time.textContent = seconds + ' second(s)';
        question.id = 'Q2'
        outcome = false
        displaymessage(); addpoints()
    }
    //Second Question CORRECT
    else if (question.id === 'Q2') {
        question.id = 'Q3'
        outcome = true
        displaymessage(); addpoints()
    }
    //Third Question INCORRECT
    else if (question.id === 'Q3') {
        seconds -= 3;
        time.textContent = seconds + ' second(s)';
        question.id = 'Q4'
        outcome = false
        displaymessage(); addpoints()
    }
    //Fourth Question INCORRECT
    else if (question.id === 'Q4') {
        seconds -= 3;
        time.textContent = seconds + ' second(s)';
        question.id = 'DONE'
        outcome = false
        displaymessage(); addpoints()
    }
})

//Fourth Button
option4.addEventListener('click', function () {
    //First Question CORRECT
    if (question.id === 'Q1') {
        question.id = 'Q2'
        outcome = true
        displaymessage(); addpoints()
    }
    //Second Question INCORRECT
    else if (question.id === 'Q2') {
        seconds -= 3;
        time.textContent = seconds + ' second(s)';
        question.id = 'Q3'
        outcome = false
        displaymessage(); addpoints()
    }
    //Third Question INCORRECT
    else if (question.id === 'Q3') {
        seconds -= 3;
        time.textContent = seconds + ' second(s)';
        question.id = 'Q4'
        outcome = false
        displaymessage(); addpoints()
    }
    //Fourth Question INCORRECT
    else if (question.id === 'Q4') {
        seconds -= 3;
        time.textContent = seconds + ' second(s)';
        question.id = 'DONE'
        outcome = false
        displaymessage(); addpoints()
    }
})

//No Thanks button takes us to begin quiz screen.
nobtn.addEventListener('click', function () {
    question.id = 'Q0'
    changecontent()
    hide()
    question.id = 'Q1'
    points = 0
    playerscore = 0
})

//Event delegation for buttons
document.getElementById('answers-0').addEventListener('click', event => {
    if (event.target.className === 'buttons') {
        changecontent()
    }
})


//Changing content based on Question
function changecontent() {
    if (question.id === 'Q0') {
        seconds = 60
        time.textContent = ('Timer')
        startbtn.style.display = 'inline-block'
        document.getElementById('answers-0').style.display = 'flex'
        document.getElementById('quiz').style.display = 'block'
        document.getElementById('clock').style.display = 'block'
        question.textContent = 'This is a simple template for a quiz and has no actual content. It only has place holders so feel free to explore.'
    }

    if (question.id === 'Q1') {
        startbtn.style.display = 'none'
        option1.style.display = 'flex'
        option2.style.display = 'flex'
        option3.style.display = 'flex'
        option4.style.display = 'flex'
        question.textContent = 'Question 1: This is an example of a question that could possibly be entered here. It could also not be entered, that is not up to me.'
        option1.textContent = 'Wrong Answer'
        option2.textContent = 'Wrong Answer'
        option3.textContent = 'Wrong Answer'
        option4.textContent = 'Right Answer'
    }

    else if (question.id === 'Q2') {
        question.textContent = 'Question 2: This is an example of a question that could possibly be entered here. It could also not be entered, that is not up to me.'
        option1.textContent = 'Wrong Answer'
        option2.textContent = 'Wrong Answer'
        option3.textContent = 'Right Answer'
        option4.textContent = 'Wrong Answer'
    }

    else if (question.id === 'Q3') {
        question.textContent = 'Question 3: This is an example of a question that could possibly be entered here. It could also not be entered, that is not up to me.'
        option1.textContent = 'Wrong Answer'
        option2.textContent = 'Right Answer'
        option3.textContent = 'Wrong Answer'
        option4.textContent = 'Wrong Answer'
    }

    else if (question.id === 'Q4') {
        question.textContent = 'Question 4: This is an example of a question that could possibly be entered here. It could also not be entered, that is not up to me.'
        option1.textContent = 'Right Answer'
        option2.textContent = 'Wrong Answer'
        option3.textContent = 'Wrong Answer'
        option4.textContent = 'Wrong Answer'
    }

    else if (question.id === 'DONE') {
        question.textContent = 'This is the end of the quiz. Would you like to submit your score? Your Score: ' + playerscore.toFixed(0)
        document.getElementById('answers-0').style.display = 'none'
        formdiv.style.display = 'flex'
        nameInput.style.display = 'flex'
        nobtn.style.display = 'flex'
        submitbtn.style.display = 'flex'
    }
}

//Add to scoreboard function
var updatescoreboard = function () {
    let recordname = localStorage.getItem("name")
    let recordscore = localStorage.getItem("score")
    var record = document.createElement('li');

    record.textContent = 'Name: ' + recordname + ' | Score: ' + recordscore
    document.getElementById('ul').appendChild(record)
}

//Submit button!
submitbtn.addEventListener('click', function (event) {
    event.preventDefault();

    var playername = nameInput.value;

    if (playername === "") {
        //alerts if blank
        alert('Name can not be blank.');
    }

    else {
        //Alerts and resets
        alert('Scoreboard Updated!');

        //Storing score and name to local storage to retrieve in scoreboare
        localStorage.setItem("name", playername);
        localStorage.setItem("score", playerscore.toFixed(0));
        question.id = 'Q0'
        changecontent()
        hide()
        question.id = 'Q1'
        points = 0
        playerscore = 0
        nameInput.value = ''
        //Function to add to scoreboard.
        updatescoreboard()
    }
})

//SCOREBOARD BUTTON
scorebtn.addEventListener('click', function () {
    document.getElementById('quiz').style.display = 'none'
    scoreboard.style.display = 'flex'
    document.getElementById('clock').style.display = 'none'
    question.id = 'DONE'
})

//BACK BUTTON
var backbtn = document.getElementById('back')
backbtn.addEventListener('click', function () {
    question.id = 'Q0'
    changecontent()
    hide()
    question.id = 'Q1'
    points = 0
    playerscore = 0
})

updatescoreboard()