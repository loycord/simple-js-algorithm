const heapSort = require("./heapSort");
const shuffle = require("./shuffle");

test("to be sorted array", () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  shuffle(array);
  heapSort(array);

  expect(array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
