import { removeTime } from '../utils';

test('removeTime correctly removes an item from an array', () => {
  const arr = ['a', 'b', 'c', 'd'];
  const itemToRemove = 'b';
  removeTime(arr, itemToRemove);

  expect(arr).toEqual(['a', 'c', 'd']);
});
