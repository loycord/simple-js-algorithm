const MaxPQ = require("./MaxPQ");

test("to be 6", () => {
  const pq = new MaxPQ();

  pq.insert(3);
  pq.insert(4);
  pq.insert(10);
  pq.insert(1);
  pq.insert(6);

  pq.delMax();
  expect(pq.delMax()).toBe(6);
});
