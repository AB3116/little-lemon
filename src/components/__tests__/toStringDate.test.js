import { toStringDate } from '../utils';

test('toStringDate converts a Date object to string representation', () => {
  const date1 = new Date('2023-06-23');
  const date2 = new Date('2022-12-31');

  expect(toStringDate(date1)).toBe('2023-06-23');
  expect(toStringDate(date2)).toBe('2022-12-31');
});
