const RedBlackBST = require("./RedBlackBST");

test("to be 4", () => {
  const bst = new RedBlackBST();

  const data = ["S", "E", "A", "R", "C", "H", "X", "M", "P", "L"];

  for (let i = 0; i < data.length; i++) {
    bst.put(data[i], i);
  }

  expect(bst.get("C")).toBe(4);
});
