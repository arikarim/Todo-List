import { createList, createTask, clearElement } from './logic';

test('Check name', () => {
  expect(createTask('ari').name).toBe('ari');
});

test('Check complete', () => {
  expect(createTask('ari').complete).toBe(false);
});

test('Check complete', () => {
  expect(createTask('ari').complete).not.toBe(true);
});

test('Check createlist name', () => {
  expect(createList('ari').name).toBe('ari');
});

test('Check createlist task', () => {
  expect(createList('ari').tasks).toStrictEqual([]);
});

test('Check createlist id', () => {
  expect(createList('ari').id).not.toBe(null);
});

test('Check createlist id string', () => {
  expect(typeof (createList('ari').id)).toBe('string');
});

test('Check createlist id', () => {
  expect(createTask('ari').id).not.toBe(null);
});

test('Check createlist id string', () => {
  expect(typeof (createTask('ari').id)).toBe('string');
});

test('Check clear element', () => {
  expect(clearElement('listsContainer')).toBe(undefined);
});
