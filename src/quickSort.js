function quickSort(a) {
  const exch = (a, i, j) => {
    const swap = a[i];
    a[i] = a[j];
    a[j] = swap;
  };

  const partition = (a, lo, hi) => {
    let i = lo;
    let j = hi + 1;

    while (true) {
      while (a[++i] < a[lo]) {
        if (i === hi) break;
      }

      while (a[lo] < a[--j]) {
        if (j === lo) break;
      }

      if (i >= j) break;
      exch(a, i, j);
    }

    exch(a, lo, j);
    return j;
  };

  const sort = (a, lo, hi) => {
    if (hi <= lo) return;
    const j = partition(a, lo, hi);
    sort(a, lo, j - 1);
    sort(a, j + 1, hi);
  };

  sort(a, 0, a.length - 1);

  return a;
}

module.exports = quickSort;
