const createProject = (() => {

  const submitButton = document.getElementById('project-submit-button');
  const projectList = document.getElementById('project-list');
  const form = document.getElementById('project-form')
  
  
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const formInput = document.getElementById('project-input').value;
    const projectDiv = document.createElement('div');
    const divChild1 = document.createElement('h4');
    const divChild2 = document.createElement('div');
  
    divChild2.innerHTML = `
    <div class="d-flex">
    <form action="" id="task-form">
      <input type="text" id="task-input">
      <button type="submit" id="task-button">Add task</button>
    </form>
    <div id="task-list"></div>
  </div>`;
  
    projectDiv.appendChild(divChild1)
    projectDiv.appendChild(divChild2)
  
    projectDiv.classList.add('d-flex');
    projectDiv.setAttribute('data-tab-content', '')
  
    divChild1.textContent = formInput;
    projectList.appendChild(projectDiv);
    form.reset();
  })


const taskInout = document.getElementById('task-input').value;
const taskButton = document.getElementById('task-button');
const taskList = document.getElementById('task-list');

taskButton.addEventListener('click', (e) => {
  e.preventDefault();

  const taskDiv = document.createElement('div');
  taskDiv.classList.add('d-flex');
  const taskChild1 = document.createElement('6');
  const taskChild2 = document.createElement('button');

  const taskName = document.getElementById('task-name');
  taskName.textContent = taskInout;

  taskList.appendChild(taskDiv)
})
    
})()

export default createProject;