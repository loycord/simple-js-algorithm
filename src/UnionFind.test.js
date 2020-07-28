const UnionFind = require("./UnionFind");

test("1 - 3 to be connected", () => {
  const unionFind = new UnionFind(10);

  unionFind.union(0, 2);
  unionFind.union(2, 3);
  unionFind.union(1, 0);

  expect(unionFind.connected(1, 3)).toBe(true);
})