const tryButton1 = document.getElementById("try1");
const conversionButton1 = document.getElementById("conversion1");
const penaltyButton1 = document.getElementById("penalty1");
const dropGoalButton1 = document.getElementById("dropGoal1");
const totalScore1 = document.getElementById("totalScore1");
const currentScore1 = document.getElementById("currentScore1");

const tryButton2 = document.getElementById("try2");
const conversionButton2 = document.getElementById("conversion2");
const penaltyButton2 = document.getElementById("penalty2");
const dropGoalButton2 = document.getElementById("dropGoal2");
const totalScore2 = document.getElementById("totalScore2");
const currentScore2 = document.getElementById("currentScore2");


let pointsScored = 0;
let tryPoint = 5;           //points for the scores
let conversionPoint = 2;
let penaltyPoint = 3;
let dropGoalPoint = 3;

//Countdown Timer

function startTimer(duration, display) {                    //80 mins countdown
    var timer = duration, minutes, seconds;
    var speed = 1;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (++timer > 4801) {                          //60 secs * 80 mins
            timer = duration;
            window.alert("Game Over");
        }
    }, 1);
}

window.onload = function () {
    var zeroMinutes = 0,
        display = document.querySelector('#time');
    startTimer(zeroMinutes, display);
};

//Add for conversion >> Toggle between team one and two

// let playerTwo= true;                

// const turn = () => {
//     if (playerTwo){
//         console.log("Player One Turn");     //if player two is false, it is player one turn
//         playerTwo = false
//     } 
//     else {
//         console.log("Player Two Turn");
//         playerTwo = true
//     }
// }
// turn()

//Score button for Team One

tryButton1.addEventListener("click", () => {
    console.log(tryPoint);
    currentScore1.textContent = tryPoint                 //5 points for try
    totalScore1.textContent = pointsScored += tryPoint //latest score plus 5 try points
})
conversionButton1.addEventListener("click", () => {
    console.log(conversionPoint);
    currentScore1.textContent = conversionPoint
    totalScore1.textContent = pointsScored += conversionPoint
})
penaltyButton1.addEventListener("click", () => {
    console.log(penaltyPoint);
    currentScore1.textContent = penaltyPoint
    totalScore1.textContent = pointsScored += penaltyPoint
})
dropGoalButton1.addEventListener("click", () => {
    console.log(dropGoalPoint);
    currentScore1.textContent = dropGoalPoint
    totalScore1.textContent = pointsScored += dropGoalPoint
})

resetBtn1.addEventListener("click", () => {
    currentScore1.textContent = 0
    totalScore1.textContent = 0
})
//Score button for Team One

tryButton2.addEventListener("click", () => {
    console.log(tryPoint);
    currentScore2.textContent = tryPoint                 //5 points for try
    totalScore2.textContent = pointsScored += tryPoint //latest score plus 5 try points
})
conversionButton2.addEventListener("click", () => {
    console.log(conversionPoint);
    currentScore2.textContent = conversionPoint
    totalScore2.textContent = pointsScored += conversionPoint
})
penaltyButton2.addEventListener("click", () => {
    console.log(penaltyPoint);
    currentScore2.textContent = penaltyPoint
    totalScore2.textContent = pointsScored += penaltyPoint
})
dropGoalButton2.addEventListener("click", () => {
    console.log(dropGoalPoint);
    currentScore2.textContent = dropGoalPoint
    totalScore2.textContent = pointsScored += dropGoalPoint
})

resetBtn2.addEventListener("click", () => {
    currentScore2.textContent = 0
    totalScore2.textContent = 0
})