const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const showClock = document.querySelector('#clock');

const question = document.querySelector('#question');
const greeting = document.querySelector('#greeting');

const today = document.querySelector('#today');
const toDoForm = document.querySelector('#toDo-form');
const toDoInput = document.querySelector('#toDo-form input');

const toDoList = document.querySelector('#toDo-list');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLogInSubmit() {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
}

function onToDoSubmit() {
    toDoForm.classList.add(HIDDEN_CLASSNAME);
    const toDoList = toDoInput.value;
    localStorage.setItem("toDoList", toDoList);
}

function paintGreetings(username) {
    greeting.innerHTML = `How are you? ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME);
    today.classList.remove(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
}

function paintToDos(toDo) {
    toDoList.innerHTML = `${toDo}`
}

loginForm.addEventListener('submit', onLogInSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLogInSubmit);
} else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    question.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}

toDoForm.addEventListener('submit', onToDoSubmit);

const savedToDoList = localStorage.getItem("toDoList");

if (savedToDoList === null) {
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    toDoForm.addEventListener('submit', onToDoSubmit);
} else {
    toDoForm.classList.add(HIDDEN_CLASSNAME);
    a
    paintToDos(savedToDoList);
}
