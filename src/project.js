import {renderLists, createList, createTask, clearElement, save, renderTaskCount} from './logic'

const createProject = () => {
  const listsContainer = document.querySelector('[data-lists]');
  const newListForm = document.querySelector('[data-new-list-form]');
  const newListinput = document.querySelector('[data-new-list-input]');
  const deleteListButton = document.querySelector('[data-delete-list-button]');
  const listDisplayContainer = document.querySelector('[data-list-display-container]');
  const listTitleElement = document.querySelector('[data-list-title]');
  const listCountElement = document.querySelector('[data-list-count]');
  const tasksContainer = document.querySelector('[data-tasks]');
  const taskTemplate = document.getElementById('task-template');
  const newTaskForm = document.querySelector('[data-new-task-form]');
  const newTaskInput = document.querySelector('[data-new-task-input]');
  const clearCompleteTasksButton = document.querySelector('[data-clear-complete-tasks-button]');

  const LOCAL_STORAGE_LIST_KEY = 'task.lists';
  const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListsId';

  let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
  let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);



  function renderTasks(selectedList) {
    selectedList.tasks.forEach((task) => {
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

  listsContainer.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
      selectedListId = e.target.dataset.listId;
      saveRender();
    }
  });

  tasksContainer.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'input') {
      const selectedList = lists.find((list) => list.id === selectedListId);
      const selectedTask = selectedList.tasks.find((task) => task.id === e.target.id);
      selectedTask.complete = e.target.checked;
      save();
      renderTaskCount(selectedList);
    }
  });

  clearCompleteTasksButton.addEventListener('click', () => {
    const selectedList = lists.find((list) => list.id === selectedListId);
    selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);
    saveRender();
  });

  deleteListButton.addEventListener('click', () => {
    lists = lists.filter((list) => list.id !== selectedListId);
    selectedListId = null;
    saveRender();
  });



  newListForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const listName = newListinput.value;
    if (listName == null || listName === '') return;
    const list = createList(listName);
    newListinput.value = '';
    lists.push(list);
    saveRender();
  });

  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskName = newTaskInput.value;
    if (taskName == null || taskName === '') return;
    const task = createTask(taskName);
    newTaskInput.value = null;
    const selectedList = lists.find((list) => list.id === selectedListId);
    selectedList.tasks.push(task);
    saveRender();
  });

  render();
};

export default createProject;