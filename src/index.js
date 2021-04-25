import './style.css';

const submitButton = document.getElementById('project-submit-button');
const projectList = document.getElementById('project-list');
const form = document.getElementById('project-form')


submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const formInput = document.getElementById('project-input').value;
  const projectDiv = document.createElement('div');
  const divChild1 = document.createElement('h4');
  const divChild2 = document.createElement('div');

  projectDiv.appendChild(divChild1)
  projectDiv.appendChild(divChild2)

  projectDiv.classList.add('d-flex');
  projectDiv.setAttribute('data-tab-content', '')

  divChild1.textContent = formInput;
  projectList.appendChild(projectDiv);
  form.reset();
})