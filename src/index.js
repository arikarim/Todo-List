import './style.css';

const submitButton = document.getElementById('project-submit-button');
const projectList = document.getElementById('project-list');
const form = document.getElementById('project-form')

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const formInput = document.getElementById('project-input').value;
  const projectDiv = document.createElement('div');
  projectDiv.textContent = formInput;
  projectList.appendChild(projectDiv);
  form.reset();
})