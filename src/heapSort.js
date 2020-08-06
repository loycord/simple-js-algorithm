function heapSort(a) {
  let N = a.length;
  a.unshift(0);

  const less = (v, w) => {
    return a[v] < a[w];
  };

  const exch = (a, i, j) => {
    const swap = a[i];
    a[i] = a[j];
    a[j] = swap;
  };

  const sink = (a, k, N) => {
    while (2 * k <= N) {
      let j = 2 * k;
      if (j < N && less(j, j + 1)) j++;
      if (!less(k, j)) break;
      exch(a, k, j);
      k = j;
    }
  };

  for (let k = parseInt(N / 2); k >= 1; k--) {
    sink(a, k, N);
  }

  while (N > 1) {
    exch(a, 1, N--);
    sink(a, 1, N);
  }

  a.shift();
  return a;
}

module.exports = heapSort;
