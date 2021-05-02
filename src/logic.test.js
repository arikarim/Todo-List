import {createList, createTask, clearElement, renderTaskCount} from './logic.js'


test('Check name', () => {
  expect(createTask('ari').name).toBe('ari');
});

test('Check complete', () => {
  expect(createTask('ari').complete).toBe(false);
});

test('Check createlist name', () => {
  expect(createList('ari').name).toBe('ari');
});

test('Check createlist task', () => {
  expect(createList('ari').tasks).toStrictEqual([]);
});

test('Check createlist task', () => {
  expect(createList('ari').tasks).toStrictEqual([]);
});


