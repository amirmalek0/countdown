isPaused = false;

function count() {
    let startingHours = document.getElementById('countdownHour').valueAsNumber;
    let startingMinutes = document.getElementById('countdownMin').valueAsNumber;
    let startingSeconds = document.getElementById('countdownSec').valueAsNumber;
    if (!startingHours || startingHours < 0) {
        startingHours = 0;
    }
    if (!startingMinutes || startingMinutes < 0) {
        startingMinutes = 0;
    }
    if (!startingSeconds || startingSeconds < 0) {
        startingSeconds = 0;
    }
    globalThis.time = (startingHours * 60 * 60) + (startingMinutes * 60) + startingSeconds;
    setInterval(timer, 1000);
}

function pause() {
    isPaused = true;
}

function resume() {
    isPaused = false;
}

function startOver() {
   location.reload();
}

function timer() {
    if (isPaused === true) {
    } else if (isPaused === false) {
            let hourDiv = document.getElementById("hour");
            let minDiv = document.getElementById("min");
            let secDiv = document.getElementById("sec");

            let hour = Math.floor(time / 3600);
            let minute = Math.floor((time % 3600) / 60);
            let second = (time % 3600) % 60;
            if (second === 0) {
                second = "" + second + second;
            }
            if (hour === 0 && minute === 0 && second === '00') {
                hourDiv.innerHTML = hour;
                minDiv.innerHTML = minute;
                secDiv.innerHTML = second;
                return;
            }
            hourDiv.innerHTML = hour;
            minDiv.innerHTML = minute;
            secDiv.innerHTML = second;
            document.getElementById('timer').style.display = 'block';
            document.getElementById('counter-inputs').style.display = 'none';

            time--;
    }
}
