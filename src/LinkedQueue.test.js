const LinkedQueue = require("./LinkedQueue");

test("first item to be 1", () => {
  const queue = new LinkedQueue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  expect(queue.first.item).toBe(1);
});

test("last item to be 3", () => {
  const queue = new LinkedQueue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.dequeue();

  expect(queue.last.item).toBe(3);
});

test("queue items to equal [1, 2, 3]", () => {
  const queue = new LinkedQueue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  expect(queue.toArray()).toEqual([1, 2, 3]);
});
