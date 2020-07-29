function insertionSort(a) {
  const less = (v, w) => {
    return v < w;
  };

  const exch = (a, i, j) => {
    const swap = a[i];
    a[i] = a[j];
    a[j] = swap;
  };

  const N = a.length;
  for (let i = 0; i < N; i++) {
    for (let j = i; j > 0; j--) {
      if (less(a[j], a[j - 1])) exch(a, j, j - 1);
      else break;
    }
  }

  return a;
}

module.exports = insertionSort;
