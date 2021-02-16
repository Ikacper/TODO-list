document.addEventListener('DOMContentLoaded', ()=>{
    const input = document.querySelector('.form-input');
    const btn = document.querySelector('.task-button');
    const taskList = document.querySelector('.task-list');

function addZero (hours) {
    return '0'+hours;
}

function currentTime() {
    const dateTime = new Date();
    let hours = dateTime.getHours();

    let oneDigitNumber = 9;

    if(hours < oneDigitNumber)
        hours = addZero(hours)
    let minutes = dateTime.getMinutes();
    if(minutes < oneDigitNumber)
        minutes = addZero(minutes)
    let seconds = dateTime.getSeconds();
    if(seconds < oneDigitNumber)
        seconds = addZero(seconds)
    const time = `${hours}:${minutes}:${seconds}`;

    return time;
}

function displayTime(el) {
   
}


function addTask (inputValue) {
    const el = document.createElement('li');
    const text = document.createElement('p');
    text.innerText = inputValue;
    text.classList.add('item-text')
    el.classList.add('task-item');

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('task-button-delete');
    deleteBtn.innerText = 'delete';
    deleteBtn.addEventListener('click', () => {
        el.remove();
    })

    const h3 = document.createElement('h3');
    
    h3.classList.add('task-date');
    h3.innerText = currentTime();
    el.appendChild(h3);

    taskList.appendChild(el);
    
    el.appendChild(text);
    el.appendChild(deleteBtn);
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(input.value != "") {
        addTask(input.value);
        input.value = '';
    }
})
})