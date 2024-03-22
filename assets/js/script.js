function count() {
    let startingHours = document.getElementById('countdownHour').valueAsNumber;
    let startingMinutes = document.getElementById('countdownMin').valueAsNumber;
    let startingSeconds = document.getElementById(('countdownSec')).valueAsNumber;
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
    globalThis.countdownEl = document.getElementById("timer");
    setInterval(timer, 1000);
}

function timer() {
    let hour = Math.floor(time / 3600);
    let minute = Math.floor((time % 3600) / 60);
    let second = (time % 3600) % 60;
    if (second === 0) {
        second = "" + second + second;
    }
    if (hour === 0 && minute === 0 && second === '00') {
        countdownEl.innerHTML = `${minute}:${second}`;
        return;
    }
    countdownEl.innerHTML = `${hour}:${minute}:${second}`;
    time--;
}