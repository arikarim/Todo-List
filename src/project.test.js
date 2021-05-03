import {
  renderLists, save,
} from './model';

test('Check listsContainer', () => {
  const listsContainer = document.querySelector('[data-lists]');

  renderLists();
  expect(listsContainer).toBe(null);
});

test('Check tasksContainer', () => {
  const selectedListId = [1, 2];

  expect(selectedListId).not.toBe(null);
});

test('Check save', () => {
  save();

  expect(localStorage).not.toBe(null);
});