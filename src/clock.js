const clock = document.querySelector('#clock');
const header = document.querySelector('.header');

function whatTimeIsIt() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    clock.innerHTML = `${hour}:${min}`;
}

whatTimeIsIt();
setInterval(whatTimeIsIt, 1000);