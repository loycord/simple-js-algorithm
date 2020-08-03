const mergeSort = require("./mergeSort");
const shuffle = require("./shuffle");

test("to be sorted array", () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const cloned = [...array];

  shuffle(array);
  mergeSort(array, cloned, 0, array.length - 1);

  expect(array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
