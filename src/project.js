
const createProject = () => {


  const listsContainer = document.querySelector('[data-lists]');

  let lists = [];

  function render() {
    clearElement(listsContainer)
    lists.forEach(list => {
      const listElement = document.createElement('li');
      listElement.classList.add('list-name');
      listElement.innerText = list;
      listsContainer.appendChild(listElement)
    })
  }

  function clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild)
    }
  }

  render();

  // const submitButton = document.getElementById('project-submit-button');
  // const projectList = document.getElementById('project-list');
  // const form = document.getElementById('project-form')
  
  
  // submitButton.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   const formInput = document.getElementById('project-input').value;
  //   const projectDiv = document.createElement('div');
  //   const divChild1 = document.createElement('h4');
  //   const divChild2 = document.createElement('div');
  
  //   divChild2.innerHTML = `
  //   <div class="d-flex">
  //   <form action="" id="task-form">
  //     <input type="text" id="task-input">
  //     <button class='button-task' type="submit" id="task-button">Add task</button>
  //   </form>
  //   <div id="task-list"></div>
  // </div>`;

  
  //   projectDiv.appendChild(divChild1)
  //   projectDiv.appendChild(divChild2)
  
  //   projectDiv.classList.add('d-flex');
  //   projectDiv.setAttribute('data-tab-content', '')
  
  //   divChild1.textContent = formInput;
  //   projectList.appendChild(projectDiv);
  //   form.reset();
  // })
  
}


export default createProject;