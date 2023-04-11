// Этот метод должен искать элемент в массиве и возвращать его индекс или -1, если элемент не находится в массиве.
// Например, если ты ищешь G в массиве [A, B, C, D, E, F, G, H], твой метод должен возвращать 6. Если ты ищешь X, он должен возвращать -1.

function binarySearch(arr, el, start, end) {
  if (end < start) {
    return -1;
  }

  let middle = Math.floor((start + end) / 2);

  if (el === arr[middle]) {
    return middle;
  }

  if (el < arr[middle]) {
    return binarySearch(arr, el, start, middle - 1);
  } else {
    return binarySearch(arr, el, middle + 1, end);
  }
}
console.log(binarySearch(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], 'G', 0, ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].length));

module.exports = binarySearch