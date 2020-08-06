const UnorderedMaxPQ = require("./UnorderedMaxPQ");

test("shoud return 10", () => {
  const pq = new UnorderedMaxPQ();

  pq.insert(4);
  pq.insert(1);
  pq.insert(10);
  pq.insert(6);

  expect(pq.delMax()).toBe(10);
});
