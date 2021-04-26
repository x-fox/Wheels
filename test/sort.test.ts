import  { bubbleSort, insertSort, quickSort, mergeSort } from '../src/sort'

test('bubbleSort [6,5,4,3,2,1] should be [1,2,3,4,5,6]', () => {
  expect(bubbleSort([6,5,4,3,2,1]).toString()).toBe([1,2,3,4,5,6].toString());
});

test('insertSort [6,5,4,3,2,1] should be [1,2,3,4,5,6]', () => {
  expect(insertSort([6,5,4,3,2,1]).toString()).toBe([1,2,3,4,5,6].toString());
});

test('quickSort [6,5,4,3,2,1] should be [1,2,3,4,5,6]', () => {
  expect(quickSort([6,5,4,3,2,1]).toString()).toBe([1,2,3,4,5,6].toString());
});

test('mergeSort [6,5,4,3,2,1] should be [1,2,3,4,5,6]', () => {
  expect(mergeSort([6,5,4,3,2,1]).toString()).toBe([1,2,3,4,5,6].toString());
});