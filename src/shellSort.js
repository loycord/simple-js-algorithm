// h-sorting
function shellSort(a) {
  const less = (v, w) => {
    return v < w;
  };

  const exch = (a, i, j) => {
    const swap = a[i];
    a[i] = a[j];
    a[j] = swap;
  };

  const N = a.length;
  let h = 1;
  while (h < N / 3) h = 3 * h + 1; // 3x+1 increment sequence

  while (h >= 1) {
    for (let i = h; i < N; i++) {
      for (let j = i; j >= h; j -= h) {
        if (less(a[j], a[j - h])) exch(a, j, j - h);
      }
    }
    h = Math.floor(h / 3);
  }

  return a;
}

module.exports = shellSort;
