const selectionSort = require("./selectionSort");
const shuffle = require("./shuffle");

test("should return [0,1,2,3,4,5,6,7,8,9] sorted array", () => {
  const array = new Array(10);
  for (let i = 0; i < array.length; i++) array[i] = i;

  shuffle(array);
  selectionSort(array);

  expect(array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
