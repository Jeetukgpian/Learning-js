const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const body = document.querySelector('body');

// Generate a random color
const randomColor = function () {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId = null;

startBtn.addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(changeColor, 1000);
    }
});

function changeColor() {
    body.style.backgroundColor = randomColor();
}

stopBtn.addEventListener('click', () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
});
