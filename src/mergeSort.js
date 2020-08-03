function mergeSort(a) {
  const aux = [...a];

  const less = (v, w) => {
    return v < w;
  };

  const merge = (a, aux, lo, mid, hi) => {
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
  };

  const sort = (a, aux, lo, hi) => {
    if (hi <= lo) return;
    const mid = Math.floor(lo + (hi - lo) / 2);
    sort(a, aux, lo, mid);
    sort(a, aux, mid + 1, hi);
    if (!less(a[mid + 1], a[mid])) return;
    merge(a, aux, lo, mid, hi);
  };

  sort(a, aux, 0, a.length - 1);

  return a;
}

module.exports = mergeSort;
