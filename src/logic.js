
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

  export function render() {
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

  export { createList, createTask, clearElement}