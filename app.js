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


let pointsScored1 = 0;
let pointsScored2 = 0;
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

        if (++timer > 4802) {                          //60 secs * 80 mins
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
// let (tryButton1 = false)
// function enableConv() {
//     if (tryButton1) {
//         document.getElementById("conversionButton1").disabled = true;
//         document.getElementById("conversionMissedButton1").disabled = true;
//     }else{
//         document.getElementById("conversionButton1").disabled = false;
//         document.getElementById("conversionMissedButton1").disabled = false;

//     }

// }


//Score button for Team One

tryButton1.addEventListener("click", () => {
    console.log(tryPoint);
    console.log("England Try Scored");
    lastPlay.textContent = "England Try Scored"
    currentScore1.textContent = tryPoint                 //5 points for try
    totalScore1.textContent = pointsScored1 += tryPoint //latest score plus 5 try points

    tryButton1.disabled = true
    conversionButton1.disabled = false
    conversionMissedButton1.disabled = false
    penaltyButton1.disabled = true
    dropGoalButton1.disabled = true

    tryButton2.disabled = true
    conversionButton2.disabled = true
    conversionMissedButton2.disabled = true
    penaltyButton2.disabled = true
    dropGoalButton2.disabled = true

    //pause the clock
})


conversionButton1.addEventListener("click", () => {
    console.log(conversionPoint);
    console.log("England Conversion Scored");
    lastPlay.textContent = "England Conversion Scored";
    currentScore1.textContent = conversionPoint
    totalScore1.textContent = pointsScored1 += conversionPoint

    tryButton1.disabled = false
    conversionButton1.disabled = true
    conversionMissedButton1.disabled = true
    penaltyButton1.disabled = false
    dropGoalButton1.disabled = false

    tryButton2.disabled = false
    conversionButton2.disabled = true
    conversionMissedButton2.disabled = true
    penaltyButton2.disabled = false
    dropGoalButton2.disabled = false
})
conversionMissedButton1.addEventListener("click", () => {
    console.log("England Conversion Missed");
    lastPlay.textContent = "England Conversion Missed";
    tryButton1.disabled = false
    conversionButton1.disabled = true
    conversionMissedButton1.disabled = true
    penaltyButton1.disabled = false
    dropGoalButton1.disabled = false

    tryButton2.disabled = false
    conversionButton2.disabled = true
    conversionMissedButton2.disabled = true
    penaltyButton2.disabled = false
    dropGoalButton2.disabled = false
})
penaltyButton1.addEventListener("click", () => {
    console.log(penaltyPoint);
    console.log("England Penalty Scored");
    lastPlay.textContent = "England Penalty Scored";
    currentScore1.textContent = penaltyPoint
    totalScore1.textContent = pointsScored1 += penaltyPoint
})
dropGoalButton1.addEventListener("click", () => {
    console.log(dropGoalPoint);
    console.log("England Drop Goal Scored");
    lastPlay.textContent = "England Drop Goal Scored";
    currentScore1.textContent = dropGoalPoint
    totalScore1.textContent = pointsScored1 += dropGoalPoint
})


//Score button for Team One

tryButton2.addEventListener("click", () => {
    console.log(tryPoint);
    console.log("Wales Try Scored");
    lastPlay.textContent = "Wales Try Scored";
    currentScore2.textContent = tryPoint                 //5 points for try
    totalScore2.textContent = pointsScored2 += tryPoint //latest score plus 5 try points

    tryButton2.disabled = true
    conversionButton2.disabled = false
    conversionMissedButton2.disabled = false
    penaltyButton2.disabled = true
    dropGoalButton2.disabled = true

    tryButton1.disabled = true
    conversionButton1.disabled = true
    conversionMissedButton1.disabled = true
    penaltyButton1.disabled = true
    dropGoalButton1.disabled = true

})
conversionButton2.addEventListener("click", () => {
    console.log(conversionPoint);
    console.log("Wales Conversion Scored");
    lastPlay.textContent = "Wales Conversion Scored";
    currentScore2.textContent = conversionPoint
    totalScore2.textContent = pointsScored2 += conversionPoint

    tryButton2.disabled = false
    conversionButton2.disabled = true
    conversionMissedButton2.disabled = true
    penaltyButton2.disabled = false
    dropGoalButton2.disabled = false

    tryButton1.disabled = false
    conversionButton1.disabled = true
    conversionMissedButton1.disabled = true
    penaltyButton1.disabled = false
    dropGoalButton1.disabled = false
})
conversionMissedButton2.addEventListener("click", () => {
    console.log("Wales Conversion Missed");
    lastPlay.textContent = "Wales Conversion Missed";
    tryButton2.disabled = false
    conversionButton2.disabled = true
    conversionMissedButton2.disabled = true
    penaltyButton2.disabled = false
    dropGoalButton2.disabled = false

    tryButton1.disabled = false
    conversionButton1.disabled = true
    conversionMissedButton1.disabled = true
    penaltyButton1.disabled = false
    dropGoalButton1.disabled = false
})
penaltyButton2.addEventListener("click", () => {
    console.log("Wales Penalty Scored");
    lastPlay.textContent = "Wales Penalty Scored";
    console.log(penaltyPoint);
    currentScore2.textContent = penaltyPoint
    totalScore2.textContent = pointsScored2 += penaltyPoint
})
dropGoalButton2.addEventListener("click", () => {
    console.log(dropGoalPoint);
    console.log("Wales Drop Goal Scored");
    lastPlay.textContent = "Wales Drop Goal Scored";
    currentScore2.textContent = dropGoalPoint
    totalScore2.textContent = pointsScored2 += dropGoalPoint
})

resetBtn.addEventListener("click", () => {
    currentScore1.textContent = 0
    totalScore1.textContent = 0
    currentScore2.textContent = 0
    totalScore2.textContent = 0

    pointsScored1 = 0
    pointsScored2 = 0

    tryButton1.disabled = false
    conversionButton1.disabled = true
    conversionMissedButton1.disabled = true
    penaltyButton1.disabled = false
    dropGoalButton1.disabled = false

    tryButton2.disabled = false
    conversionButton2.disabled = true
    conversionMissedButton2.disabled = true
    penaltyButton2.disabled = false
    dropGoalButton2.disabled = false

    lastPlay.textContent = ""

})