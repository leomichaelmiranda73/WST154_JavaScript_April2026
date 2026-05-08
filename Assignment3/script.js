// ================= CLOCK + CALENDAR =================

function updateTime() {
    const now = new Date();

    // TIME
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let ms = now.getMilliseconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    ms = ms.toString().padStart(3, "0");

    document.getElementById("clock").innerText =
        `Time: ${h}:${m}:${s}:${ms}`;

    // CALENDAR
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];

    let dayName = days[now.getDay()];
    let day = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    document.getElementById("calendar").innerText =
        `Date: ${dayName}, ${month} ${day}, ${year}`;
}

setInterval(updateTime, 1);
updateTime();


// ================= STOPWATCH =================

let startTime = 0;
let elapsed = 0;
let timer = null;

function formatTime(ms) {
    let hours = Math.floor(ms / 3600000);
    let minutes = Math.floor((ms % 3600000) / 60000);
    let seconds = Math.floor((ms % 60000) / 1000);
    let milliseconds = ms % 1000;

    return (
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0") + ":" +
        String(milliseconds).padStart(3, "0")
    );
}

function updateStopwatch() {
    const now = Date.now();
    elapsed = now - startTime;
    document.getElementById("stopwatch").innerText = formatTime(elapsed);
}

function startStopwatch() {
    if (!timer) {
        startTime = Date.now() - elapsed;
        timer = setInterval(updateStopwatch, 10);
    }
}

function stopStopwatch() {
    clearInterval(timer);
    timer = null;
}

function resetStopwatch() {
    clearInterval(timer);
    timer = null;
    elapsed = 0;
    document.getElementById("stopwatch").innerText = "00:00:00:000";
}