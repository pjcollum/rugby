const tryButton1 = document.getElementById("try1");
const conversionButton1 = document.getElementById("conversion1");
const conversionMissedButton1 = document.getElementById("conversionMissedButton1");
const penaltyButton1 = document.getElementById("penalty1");
const dropGoalButton1 = document.getElementById("dropGoal1");
const totalScore1 = document.getElementById("totalScore1");
const currentScore1 = document.getElementById("currentScore1");

const lastPlay = document.getElementById("lastPlay");

const tryButton2 = document.getElementById("try2");
const conversionButton2 = document.getElementById("conversion2");
const conversionMissedButton2 = document.getElementById("conversionMissedButton2");
const penaltyButton2 = document.getElementById("penalty2");
const dropGoalButton2 = document.getElementById("dropGoal2");
const totalScore2 = document.getElementById("totalScore2");
const currentScore2 = document.getElementById("currentScore2");

const tryScored = document.getElementById("tryScored")
const tryScored2 = document.getElementById("tryScored2")
const coversionScored = document.getElementById("conversionScored")
const coversionMissedScored = document.getElementById("conversionMissedScored")
const penScored = document.getElementById("penScored")
const dropScored = document.getElementById("dropScored")

let pointsScored1 = 0;
let pointsScored2 = 0;
let tryPoint = 5;           //points for the scores
let conversionPoint = 2;
let penaltyPoint = 3;
let dropGoalPoint = 3;

let tryScored1 = 0;
let conversionScored1 = 0;
let conversionMissedScored1 = 0;
let penScored1 = 0;
let dropScored1 = 0;

let tryScored3= 0;
let conversionScored3 = 0;
let conversionMissedScored3 = 0;
let penScored3 = 0;
let dropScored3 = 0;

// //Countdown Timer
// function startTimer(duration, display) {                    //80 mins countdown
//     var timer = duration, minutes, seconds;
//     var speed = 1;

//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (++timer > 4800) {                          //60 secs * 80 mins
//             timer = duration;
//             window.alert("Game Over");
//         }
//     }, 1);
// }

// window.onload = function () {
//     var zeroMinutes = 0,
//         display = document.querySelector('#time');
//     startTimer(zeroMinutes, display);
// };

// New Timer
let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;
let status = "stopped"

function stopWatch(){
    seconds++

    if (seconds / 60 ===1){
        seconds = 0;
        minutes++

        if (minutes / 60 === 1){
            minutes = 0;
            hours++
        }
    }
        if (seconds < 10){
            displaySeconds = "0" + seconds.toString();
        }
        else{
            displaySeconds = seconds
        }

        if (minutes < 10){
            displayMinutes = "0" + minutes.toString();
        }
        else{
            displayMinutes = minutes
        }
        if (hours < 10){
            displayHours = "0" + hours.toString();
        }
        else{
            displayHours = hours
        }
        // if (displayMinutes === 40) {                          //60 secs * 80 mins
        //        timer = duration;
        //         window.alert("Half Time");
        // }

    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes;
}


function startStop(){
    if(status === "stopped" || displayMinutes === 40 || displayMinutes === 80){
       interval = window.setInterval(stopWatch); //start the stopwatch
       document.getElementById("startStop").innerHTML = "Stop";
       status = "started"
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped"
    }
}

function reset(){

    document.getElementById("display").innerHTML = "00:00"
    document.getElementById("startStop").innerHTML = "Start"

    window.clearInterval(interval);
    status = "stopped"
    seconds  = 0
    minutes  = 0
    hours  = 0


    currentScore1.textContent = 0
    totalScore1.textContent = 0

    tryScored.textContent = 0
    tryScored2.textContent = 0
    conversionScored.textContent = 0
    conversionScored2.textContent = 0
    conversionMissedScored.textContent = 0
    conversionMissedScored2.textContent = 0
    penScored.textContent = 0
    penScored2.textContent = 0
    dropScored.textContent = 0
    dropScored2.textContent = 0

    currentScore2.textContent = 0
    totalScore2.textContent = 0

    pointsScored1 = 0
    pointsScored2 = 0

    tryButton1.disabled = false
    tryButton1.style.cssText = "background-color: white"
    conversionButton1.disabled = true
    conversionButton1.style.cssText = 'background-color: lightgrey';
    conversionMissedButton1.disabled = true
    conversionMissedButton1.style.cssText = 'background-color: lightgrey';
    penaltyButton1.disabled = false
    penaltyButton1.style.cssText = "background-color: white"
    dropGoalButton1.disabled = false
    dropGoalButton1.style.cssText = "background-color: white"

    tryButton2.disabled = false
    tryButton2.style.cssText = "background-color: white"
    conversionButton2.disabled = true
    conversionButton2.style.cssText = "background-color: lightgrey"
    conversionMissedButton2.disabled = true
    conversionMissedButton2.style.cssText = "background-color: lightgrey"
    penaltyButton2.disabled = false
    penaltyButton2.style.cssText = "background-color: white"
    dropGoalButton2.disabled = false
    dropGoalButton2.style.cssText = "background-color: white"

    lastPlay.textContent = ""
}

//Score button for Team One

tryButton1.addEventListener("click", () => {
    console.log(tryPoint);
    console.log("England Try Scored");
    lastPlay.textContent = "England Try Scored"  //attempting to add time
    currentScore1.textContent = tryPoint                 //5 points for try
    totalScore1.textContent = pointsScored1 += tryPoint //latest score plus 5 try points

    tryButton1.disabled = true
    tryButton1.style.cssText = "background-color: lightgrey"
    conversionButton1.disabled = false
    conversionButton1.style.cssText = 'background-color: white';
    conversionMissedButton1.disabled = false
    conversionMissedButton1.style.cssText = 'background-color: white';
    penaltyButton1.disabled = true
    penaltyButton1.style.cssText = "background-color: lightgrey"
    dropGoalButton1.disabled = true
    dropGoalButton1.style.cssText = "background-color: lightgrey"

    tryButton2.disabled = true
    tryButton2.style.cssText = "background-color: lightgrey"
    conversionButton2.disabled = true
    conversionButton2.style.cssText = "background-color: lightgrey"
    conversionMissedButton2.disabled = true
    conversionMissedButton2.style.cssText = "background-color: lightgrey"
    penaltyButton2.disabled = true
    penaltyButton2.style.cssText = "background-color: lightgrey"
    dropGoalButton2.disabled = true
    dropGoalButton2.style.cssText = "background-color: lightgrey"

    tryScored1++
    tryScored.textContent = `${tryScored1}`
})


conversionButton1.addEventListener("click", () => {
    console.log(conversionPoint);
    console.log("England Conversion Scored");
    lastPlay.textContent = "England Conversion Scored";
    currentScore1.textContent = conversionPoint
    totalScore1.textContent = pointsScored1 += conversionPoint

    tryButton1.disabled = false
    tryButton1.style.cssText = "background-color: white"
    conversionButton1.disabled = true
    conversionButton1.style.cssText = 'background-color: lightgrey';
    conversionMissedButton1.disabled = true
    conversionMissedButton1.style.cssText = 'background-color: lightgrey';
    penaltyButton1.disabled = false
    penaltyButton1.style.cssText = "background-color: white"
    dropGoalButton1.disabled = false
    dropGoalButton1.style.cssText = "background-color: white"

    tryButton2.disabled = false
    tryButton2.style.cssText = "background-color: white"
    conversionButton2.disabled = true
    conversionButton2.style.cssText = "background-color: lightgrey"
    conversionMissedButton2.disabled = true
    conversionMissedButton2.style.cssText = "background-color: lightgrey"
    penaltyButton2.disabled = false
    penaltyButton2.style.cssText = "background-color: white"
    dropGoalButton2.disabled = false
    dropGoalButton2.style.cssText = "background-color: white"

    conversionScored1++
    conversionScored.textContent = `${conversionScored1}`
})
conversionMissedButton1.addEventListener("click", () => {
    console.log("England Conversion Missed");
    lastPlay.textContent = "England Conversion Missed";
    tryButton1.disabled = false
    tryButton1.style.cssText = "background-color: white"
    conversionButton1.disabled = true
    conversionButton1.style.cssText = 'background-color: lightgrey';
    conversionMissedButton1.disabled = true
    conversionMissedButton1.style.cssText = 'background-color: lightgrey';
    penaltyButton1.disabled = false
    penaltyButton1.style.cssText = "background-color: white"
    dropGoalButton1.disabled = false
    dropGoalButton1.style.cssText = "background-color: white"

    tryButton2.disabled = false
    tryButton2.style.cssText = "background-color: white"
    conversionButton2.disabled = true
    conversionButton2.style.cssText = "background-color: lightgrey"
    conversionMissedButton2.disabled = true
    conversionMissedButton2.style.cssText = "background-color: lightgrey"
    penaltyButton2.disabled = false
    penaltyButton2.style.cssText = "background-color: white"
    dropGoalButton2.disabled = false
    dropGoalButton2.style.cssText = "background-color: white"

    conversionMissedScored1++
    conversionMissedScored.textContent = `${conversionMissedScored1}`
})
penaltyButton1.addEventListener("click", () => {
    console.log(penaltyPoint);
    console.log("England Penalty Scored");
    lastPlay.textContent = "England Penalty Scored";
    currentScore1.textContent = penaltyPoint
    totalScore1.textContent = pointsScored1 += penaltyPoint

    penScored1++
    penScored.textContent = `${penScored1}`
})
dropGoalButton1.addEventListener("click", () => {
    console.log(dropGoalPoint);
    console.log("England Drop Goal Scored");
    lastPlay.textContent = "England Drop Goal Scored";
    currentScore1.textContent = dropGoalPoint
    totalScore1.textContent = pointsScored1 += dropGoalPoint

    dropScored1++
    dropScored.textContent = `${dropScored1}`
    
})


//Score button for Team One

tryButton2.addEventListener("click", () => {
    console.log(tryPoint);
    console.log("Wales Try Scored");
    lastPlay.textContent = "Wales Try Scored";
    currentScore2.textContent = tryPoint                 //5 points for try
    totalScore2.textContent = pointsScored2 += tryPoint //latest score plus 5 try points

    tryButton2.disabled = true
    tryButton2.style.cssText = 'background-color: lightgrey';
    conversionButton2.disabled = false
    conversionButton2.style.cssText = 'background-color: white';
    conversionMissedButton2.disabled = false
    conversionMissedButton2.style.cssText = 'background-color: white';
    penaltyButton2.disabled = true
    penaltyButton2.style.cssText = 'background-color: lightgrey';
    dropGoalButton2.disabled = true
    dropGoalButton2.style.cssText = 'background-color: lightgrey';

    tryButton1.disabled = true
    tryButton1.style.cssText = 'background-color: lightgrey';
    conversionButton1.disabled = true
    conversionButton1.style.cssText = 'background-color: lightgrey';
    conversionMissedButton1.disabled = true
    conversionMissedButton1.style.cssText = 'background-color: lightgrey';
    penaltyButton1.disabled = true
    penaltyButton1.style.cssText = 'background-color: lightgrey';
    dropGoalButton1.disabled = true
    dropGoalButton1.style.cssText = 'background-color: lightgrey';

    tryScored3++
    tryScored2.textContent = `${tryScored3}`

})
conversionButton2.addEventListener("click", () => {
    console.log(conversionPoint);
    console.log("Wales Conversion Scored");
    lastPlay.textContent = "Wales Conversion Scored";
    currentScore2.textContent = conversionPoint
    totalScore2.textContent = pointsScored2 += conversionPoint

    tryButton2.disabled = false
    tryButton2.style.cssText = 'background-color: white';
    conversionButton2.disabled = true
    conversionButton2.style.cssText = 'background-color: lightgrey';
    conversionMissedButton2.disabled = true
    conversionMissedButton2.style.cssText = 'background-color: lightgrey';
    penaltyButton2.disabled = false
    penaltyButton2.style.cssText = 'background-color: white';
    dropGoalButton2.disabled = false
    dropGoalButton2.style.cssText = 'background-color: white';

    tryButton1.disabled = false
    tryButton1.style.cssText = 'background-color: white';
    conversionButton1.disabled = true
    conversionButton1.style.cssText = 'background-color: lightgrey';
    conversionMissedButton1.disabled = true
    conversionMissedButton1.style.cssText = 'background-color: lightgrey';
    penaltyButton1.disabled = false
    penaltyButton1.style.cssText = 'background-color: white';
    dropGoalButton1.disabled = false
    dropGoalButton1.style.cssText = 'background-color: white';

    conversionScored3++
    conversionScored2.textContent = `${conversionScored3}`
})
conversionMissedButton2.addEventListener("click", () => {
    console.log("Wales Conversion Missed");
    lastPlay.textContent = "Wales Conversion Missed";
    tryButton2.disabled = false
    tryButton2.style.cssText = 'background-color: white';
    conversionButton2.disabled = true
    conversionButton2.style.cssText = 'background-color: lightgrey';
    conversionMissedButton2.disabled = true
    conversionMissedButton2.style.cssText = 'background-color: lightgrey';
    penaltyButton2.disabled = false
    penaltyButton2.style.cssText = 'background-color: white';
    dropGoalButton2.disabled = false
    dropGoalButton2.style.cssText = 'background-color: white';

    tryButton1.disabled = false
    tryButton1.style.cssText = 'background-color: white';
    conversionButton1.disabled = false
    conversionButton1.style.cssText = 'background-color: lightgrey';
    conversionMissedButton1.disabled = true
    conversionMissedButton1.style.cssText = 'background-color: lightgrey';
    penaltyButton1.disabled = false
    penaltyButton1.style.cssText = 'background-color: white';
    dropGoalButton1.disabled = false
    dropGoalButton1.style.cssText = 'background-color: white';

    conversionMissedScored3++
    conversionMissedScored2.textContent = `${conversionMissedScored3}`
})
penaltyButton2.addEventListener("click", () => {
    console.log("Wales Penalty Scored");
    lastPlay.textContent = "Wales Penalty Scored";
    console.log(penaltyPoint);
    currentScore2.textContent = penaltyPoint
    totalScore2.textContent = pointsScored2 += penaltyPoint

    penScored3++
    penScored2.textContent = `${penScored3}`
})
dropGoalButton2.addEventListener("click", () => {
    console.log(dropGoalPoint);
    console.log("Wales Drop Goal Scored");
    lastPlay.textContent = "Wales Drop Goal Scored";
    currentScore2.textContent = dropGoalPoint
    totalScore2.textContent = pointsScored2 += dropGoalPoint

    dropScored3++
    dropScored2.textContent = `${dropScored3}`
})
