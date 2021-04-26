const listCountElement = document.querySelector('[data-list-count]');

const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListsId';

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

function renderTaskCount(selectedListId) {
  const incompleteTaskCount = selectedListId.tasks.filter((task) => !task.complete).length;
  const taskString = incompleteTaskCount === 1 ? 'task' : 'tasks';
  listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
}

export {
  createList, createTask, clearElement, renderTaskCount,
};