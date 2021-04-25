
const createProject = () => {


  const listsContainer = document.querySelector('[data-lists]');
  const newListForm = document.querySelector('[data-new-list-form]')
  const newListinput = document.querySelector('[data-new-list-input]')

  const LOCAL_STORAGE_LIST_KEY = 'task.lists'
  
  let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

  newListForm.addEventListener('submit', e => {
    e.preventDefault();
    const listName = newListinput.value;
    if(listName == null || listName === '') return
    const list = createList(listName)
    newListinput.value = '';
    lists.push(list)
    saveRender()
  })

  function createList(name) {
    return { id: Date.now().toString(), name: name, tasks: []}
  }

  function saveRender() {
    save()
    render()
  }

  function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY ,JSON.stringify(lists))
  }

  function render() {
    clearElement(listsContainer)
    lists.forEach(list => {
      const listElement = document.createElement('li');
      listElement.dataset.listId = list.id
      listElement.classList.add('list-name');
      listElement.innerText = list.name;
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