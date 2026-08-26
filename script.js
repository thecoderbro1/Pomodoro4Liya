let timeLeft = 25 * 60;
let timerDisplay = document.getElementById("timer");
function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timerDisplay.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}
let timeLeft = 25 * 60;
let timer;

function startTimer() {
    timer = setInterval(function() {
        timeLeft--;

        console.log(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimer();
        } else {
            clearInterval(timerInterval);
        }
    }, 1000);
}
