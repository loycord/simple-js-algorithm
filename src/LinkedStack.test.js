const LinkedStack = require("./LinkedStack");

test("first item to be 3", () => {
  const stack = new LinkedStack();
  stack.push(1);
  stack.push(2);
  stack.push(3);

  expect(stack.first.item).toBe(3);
});

test("first item to be 2", () => {
  const stack = new LinkedStack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.pop();

  expect(stack.first.item).toBe(2);
});

test("stack items to equal [3, 2, 1]", () => {
  const stack = new LinkedStack();
  stack.push(1);
  stack.push(2);
  stack.push(3);

  expect(stack.toArray()).toEqual([3, 2, 1]);
});
