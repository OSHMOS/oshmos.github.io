const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const clock = document.querySelector('#clock');
const header = document.querySelector('.header');
const question = document.querySelector('#question');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = "username";


function onLogInSubmit(e) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
}

function paintGreetings(username) {
    greeting.innerHTML = `How are you? ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME);
}

function whatTimeIsIt() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const sec = String(date.getSeconds()).padStart(2, '0');
    clock.innerHTML = `${hour}:${min}:${sec}`;
}

whatTimeIsIt();
setInterval(whatTimeIsIt, 1000);
loginForm.addEventListener("submit", onLogInSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLogInSubmit);
} else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    question.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}