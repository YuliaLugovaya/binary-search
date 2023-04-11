const binarySearch = require('../index')

describe("Function One:", () => {
  test('Функция должна возвращать индекс элемента', () => {
    let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let el = 'G';
    let start = 0;
    let end = arr.length;
    expect(binarySearch(arr, el, start, end)).toBe(6);
    expect(binarySearch(arr, el, start, end)).toEqual(6);
    expect(binarySearch(arr, el, start, end)).toBeGreaterThan(3);
  })
  test('Функция должна быть определена', () => {
    let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let el = 'G';
    let start = 0;
    let end = arr.length;
    expect(binarySearch(arr, el, start, end)).toBeTruthy();
    expect(binarySearch(arr, el, start, end)).toBeDefined();
  })
  test('Функция должна возвращать -1, если элемента не существует в данном массиве', () => {
    expect(binarySearch([], 1, 0, [].length)).toBe(-1);
    expect(binarySearch([1, 2, 7], 8, 0, [1, 2, 7].length)).toEqual(-1);
  })
})