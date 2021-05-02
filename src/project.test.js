import { before } from 'lodash';
import {saveRender,render,renderLists,renderTasks, save} from './model'

test('Check listsContainer', () => {
  const listsContainer = document.querySelector('[data-lists]');


  require('./model');
  renderLists() 
  expect(listsContainer).toBe(null);
});

test('Check tasksContainer', () => {
  const tasksContainer = document.querySelector('[data-tasks]');

  require('./model');
  const LOCAL_STORAGE_LIST_KEY = 'task.lists';
  const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListsId';

 
  let selectedListId = [1,2]
 
  expect(selectedListId).not.toBe(null);
});

test('Check save', () => {

  require('./model');

  save()
 
  expect(localStorage).not.toBe(null);
});