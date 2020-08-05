// The goal of 3-way partitioning is to speed up quicksort in the presence of duplicate keys.
function threeWayQuickSort(a) {
  const exch = (a, i, j) => {
    const swap = a[i];
    a[i] = a[j];
    a[j] = swap;
  };

  const compare = (v, w) => {
    if (v < w) {
      return -1;
    } else if (v > w) {
      return 1;
    }
    return 0;
  };

  const sort = (a, lo, hi) => {
    if (hi <= lo) return;
    let lt = lo;
    let gt = hi;
    const v = a[lo];
    let i = lo;
    while (i <= gt) {
      const cmp = compare(a[i], v);
      if (cmp < 0) exch(a, lt++, i++);
      else if (cmp > 0) exch(a, i, gt--);
      else i++;
    }

    sort(a, lo, lt - 1);
    sort(a, gt + 1, hi);
  };

  sort(a, 0, a.length - 1);

  return a;
}

module.exports = threeWayQuickSort;
