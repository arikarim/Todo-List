
const createProject = () => {


  const listsContainer = document.querySelector('[data-lists]');
  const newListForm = document.querySelector('[data-new-list-form]')
  const newListinput = document.querySelector('[data-new-list-input]')
  const deleteListButton = document.querySelector('[data-delete-list-button]')
  const listDisplayContainer = document.querySelector('[data-list-display-container]')
  const listTitleElement = document.querySelector('[data-list-title]')
  const listCountElement = document.querySelector('[data-list-count]')
  const tasksContainer = document.querySelector('[data-tasks]')


  listsContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'li') {
      selectedListId = e.target.dataset.listId
      saveRender();
    }
  })

  deleteListButton.addEventListener('click', e => {
    lists = lists.filter(list => list.id !== selectedListId)
    selectedListId = null
    saveRender()
  })
  
  const LOCAL_STORAGE_LIST_KEY = 'task.lists'
  const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListsId'
  
  let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
  let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)

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
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY ,JSON.stringify(lists));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
  }

  function render() {
    clearElement(listsContainer)
    renderLists()

    const selectedList = lists.find(list => list.id === selectedListId)
    if (selectedListId == null ) {
      listDisplayContainer.style.display = 'none'
    } else {
      listDisplayContainer.style.display = ''
      listTitleElement.innerText = selectedList.name
      renderTaskCount(selectedList)
    }
  }

  function renderTaskCount(selectedListId) {
    const incompleteTaskCount = selectedListId.tasks.filter(task =>
      !task.complete).length
    const taskString = incompleteTaskCount === 1 ? 'task' : 'tasks';
    listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`
  }

  function renderLists() {
    lists.forEach(list => {
      const listElement = document.createElement('li');
      listElement.dataset.listId = list.id
      listElement.classList.add('list-name');
      listElement.innerText = list.name;
      if (list.id === selectedListId) {
        listElement.classList.add('active-list')
      }
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