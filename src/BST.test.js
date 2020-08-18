const BST = require("./BST");
const shuffle = require("./shuffle");

test("should return 4", () => {
  const bst = new BST();

  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  shuffle(array);

  for (let i = 0; i < array.length; i++) {
    bst.put(array[i], array[i]);
  }

  for (let i = 0; i < 4; i++) {
    bst.deleteMin();
  }

  expect(bst.min()).toBe(4);
});

test("deleted 5", () => {
  const bst = new BST();

  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  shuffle(array);

  for (let i = 0; i < array.length; i++) {
    bst.put(array[i], array[i]);
  }

  expect(bst.get(5)).toBe(5);
  expect(bst.rank(6)).toBe(6);
  bst.delete(5);
  expect(bst.get(5)).toBeNull();
  expect(bst.rank(6)).toBe(5);
});

test("should return 10", () => {
  const bst = new BST();

  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  shuffle(array);

  for (let i = 0; i < array.length; i++) {
    bst.put(array[i], array[i]);
  }

  expect(bst.rank(9)).toBe(9);
});
