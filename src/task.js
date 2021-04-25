const createTask = () => {


const taskInout = document.getElementById('task-input').value;
const taskButton = document.getElementById('task-button');
const taskList = document.getElementById('task-list');

taskButton.addEventListener('click', (e) => {
  e.preventDefault

  const taskDiv = document.createElement('div');
  taskDiv.classList.add('d-flex');
  const taskChild1 = document.createElement('6');
  const taskChild2 = document.createElement('button');

  const taskName = document.getElementById('task-name');
  taskName.textContent = taskInout;

  taskList.appendChild(taskDiv)
})

};

export default createTask;