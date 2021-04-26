const listCountElement = document.querySelector('[data-list-count]');
const listsContainer = document.querySelector('[data-lists]');

  
  const LOCAL_STORAGE_LIST_KEY = 'task.lists';
  const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListsId';

  let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
  let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);
  function createList(name) {
    return { id: Date.now().toString(), name, tasks: [] };
  }

  function createTask(name) {
    return { id: Date.now().toString(), name, complete: false };
  }

    function clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
  }

  function renderTaskCount(selectedListId) {
    const incompleteTaskCount = selectedListId.tasks.filter((task) => !task.complete).length;
    const taskString = incompleteTaskCount === 1 ? 'task' : 'tasks';
    listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
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


  export { renderLists, createList, createTask, clearElement, save, renderTaskCount}