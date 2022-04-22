colors = ['#2D8CD5', '#904EAD', '#EEBC11'];

const header = document.querySelector('.header');
const clock = document.querySelector('.clock');

function changeBoxBgColor() {
    const boxBgColor = colors[Math.floor(Math.random() * colors.length)];
    header.style.background = `${boxBgColor}`;
}

function whatTimeIsIt() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const sec = String(date.getSeconds()).padStart(2, '0');
    clock.innerHTML = `${hour}:${min}:${sec}`;
}

header.style.background = colors[0];
whatTimeIsIt();
setInterval(whatTimeIsIt, 1000);
setInterval(changeBoxBgColor, 5000);