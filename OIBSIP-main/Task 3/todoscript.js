const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTask = document.querySelector('#new-task').value.trim();
    if (newTask !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
      <span>${newTask}</span>
      <button>Delete</button>
    `;
        taskList.appendChild(li);
        document.querySelector('#new-task').value = '';
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentNode.remove();
    }
});
