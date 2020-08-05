const threeWayQuickSort = require("./threeWayQuickSort");
const shuffle = require("./shuffle");

test("should return [0,1,2,5,5,5,5,7,8,9] sorted array", () => {
  const array = [0, 1, 2, 5, 5, 5, 5, 7, 8, 9];

  shuffle(array);
  threeWayQuickSort(array);

  expect(array).toEqual([0, 1, 2, 5, 5, 5, 5, 7, 8, 9]);
});
