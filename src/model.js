
  const listsContainer = document.querySelector('[data-lists]');
  const listDisplayContainer = document.querySelector('[data-list-display-container]');
  const listTitleElement = document.querySelector('[data-list-title]');
  const tasksContainer = document.querySelector('[data-tasks]');
  const taskTemplate = document.getElementById('task-template');
 

  const LOCAL_STORAGE_LIST_KEY = 'task.lists';
  const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListsId';

  let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
  let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);
  function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
  }

  function renderTasks(selectedList) {
    selectedList.forEach((task) => {
      const taskElement = document.importNode(taskTemplate.content, true);
      const checkbox = taskElement.querySelector('input');
      checkbox.id = task.id;
      checkbox.checked = task.complete;
      const label = taskElement.querySelector('label');
      label.htmlFor = task.id;
      label.append(task.name);
      tasksContainer.appendChild(taskElement);
    });
  }

  function renderLists() {
    lists.forEach((list) => {
      const listElement = document.createElement('li');
      listElement.dataset.listId = list.id;
      listElement.classList.add('list-name');
      listElement.innerText = list.name;
      if (list.id === selectedListId) {
        listElement.classList.add('active-list');
      }
      listsContainer.appendChild(listElement);
    });
  }

  function render() {
    clearElement(listsContainer);
    renderLists();

    const selectedList = lists.find((list) => list.id === selectedListId);
    if (selectedListId == null) {
      listDisplayContainer.style.display = 'none';
    } else {
      listDisplayContainer.style.display = '';
      listTitleElement.innerText = selectedList.name;
      renderTaskCount(selectedList);
      clearElement(tasksContainer);
      renderTasks(selectedList);
    }
  }

  function saveRender() {
    save();
    render();
  }

  export {saveRender,render,renderLists,renderTasks, save}
