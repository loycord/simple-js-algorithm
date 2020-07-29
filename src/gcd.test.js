const gcd = require("./gcd");

test("gcd p = 216, q = 192 to be 24", () => {
  const result = gcd(216, 192);
  expect(result).toBe(24);
});

test("gcd p = 192, q = 216 to be 24", () => {
  const result = gcd(192, 216);
  expect(result).toBe(24);
});

test("gcd p = 8, q = 5 be 1", () => {
  const result = gcd(8, 5);
  expect(result).toBe(1);
});
