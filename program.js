document.addEventListener('DOMContentLoaded', ()=>{
    const input = document.querySelector('input');
    const btn = document.querySelector('button');
    const taskList = document.querySelector('.task-list');

function time() {
    const dateTime = new Date();
    let hours = dateTime.getHours();
    if(hours < 9)
        hours = "0"+hours;
    let minutes = dateTime.getMinutes();
    if(minutes < 9)
        minutes = "0"+minutes;
    let seconds = dateTime.getSeconds();
    if(seconds < 9)
        seconds = "0"+seconds;
    const hour = hours+ ":"+ minutes + ":" + seconds;

    return hour;
}


function addTask (val) {
    const el = document.createElement('li');
    const text = document.createElement('p');
    text.innerText = val;
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
    h3.innerText = time();

    taskList.appendChild(el);
    el.appendChild(h3);
    el.appendChild(text);
    el.appendChild(deleteBtn);
}

btn.addEventListener('click', () => {
    
    if(input.value != "") {
        addTask(input.value);
        input.value = '';
    }
})
})