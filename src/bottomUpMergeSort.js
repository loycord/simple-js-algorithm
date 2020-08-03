function bottomUpMergeSort(a) {
  const N = a.length;
  const aux = new Array(N);

  function less(v, w) {
    return v < w;
  }

  function merge(a, lo, mid, hi) {
    // copy
    for (let k = lo; k <= hi; k++) {
      aux[k] = a[k];
    }

    // merge
    let i = lo;
    let j = mid + 1;
    for (let k = lo; k <= hi; k++) {
      if (i > mid) {
        a[k] = aux[j++];
      } else if (j > hi) {
        a[k] = aux[i++];
      } else if (less(aux[j], aux[i])) {
        a[k] = aux[j++];
      } else {
        a[k] = aux[i++];
      }
    }
  }

  for (let sz = 1; sz < N; sz = sz + sz) {
    for (let lo = 0; lo < N - sz; lo += sz + sz) {
      merge(a, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, N - 1));
    }
  }
}

module.exports = bottomUpMergeSort;
