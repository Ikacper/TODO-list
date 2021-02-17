document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.form-taskInput');
  const btn = document.querySelector('.form-taskButton');
  const taskList = document.querySelector('.task-list');

  function displayCurrentTime() {
    const dateTime = new Date();
    const oneDigitNumber = 9;
    let hours = dateTime.getHours().toString();
    if (hours < oneDigitNumber) {
      hours = hours.padStart(2, '0');
    }
    let minutes = dateTime.getMinutes().toString();
    if (minutes < oneDigitNumber) {
      minutes = minutes.padStart(2, '0');
    }
    let seconds = dateTime.getSeconds().toString();
    if (seconds < oneDigitNumber) {
      seconds = seconds.padStart(2, '0');
    }
    const time = `${hours}:${minutes}:${seconds}`;

    return time;
  }

  function displayTime(el) {
    const h3 = document.createElement('h3');
    h3.classList.add('task-date');
    h3.innerText = displayCurrentTime();
    el.appendChild(h3);
  }

  function displayTask(el, inputValue) {
    const text = document.createElement('p');
    text.innerText = inputValue;
    text.classList.add('item-text');
    el.appendChild(text);
  }

  function displayDeleteBtn(el) {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('task-button-delete');
    deleteBtn.innerText = 'delete';
    deleteBtn.addEventListener('click', () => {
      el.remove();
    });
    el.appendChild(deleteBtn);
  }

  function addTask(inputValue) {
    const el = document.createElement('li');
    el.classList.add('task-item');
    displayTime(el);
    displayTask(el, inputValue);
    displayDeleteBtn(el);
    taskList.appendChild(el);
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value !== '') {
      addTask(input.value);
      input.value = '';
    }
  });
});
