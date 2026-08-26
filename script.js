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
