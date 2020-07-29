function exch(a, i, j) {
  const swap = a[i];
  a[i] = a[j];
  a[j] = swap;
}

function shuffle(a) {
  for (let i = 0; i < a.length; i++) {
    const r = Math.floor(Math.random() * i);
    exch(a, r, i);
  }
  return a;
}

module.exports = shuffle;
