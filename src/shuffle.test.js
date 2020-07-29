const shuffle = require("./shuffle");

test("random check", () => {
  const result = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const isDiff = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].every(
    (v, i) => v !== result[i]
  );

  expect(isDiff).toBeTruthy();
});
