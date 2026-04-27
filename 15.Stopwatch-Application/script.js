let time = 0, timer;

function start() {
    if (timer) return;

    timer = setInterval(() => {
        time++;
        display.innerText =
            pad(Math.floor(time/3600)) + ":" +
            pad(Math.floor(time/60)%60) + ":" +
            pad(time%60);
    }, 1000);
}

function stop() {
    clearInterval(timer); 
    timer = null;
}

function reset() {
    stop();
    time = 0;
    display.innerText = "00:00:00";
}

function pad(n) {
    return n < 10 ? "0" + n : n;
}