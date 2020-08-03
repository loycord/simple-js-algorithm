function less(v, w) {
  return v < w;
}

function merge(a, aux, lo, mid, hi) {
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

function mergeSort(a, aux, lo, hi) {
  if (hi <= lo) return;
  const mid = Math.floor(lo + (hi - lo) / 2);
  mergeSort(a, aux, lo, mid);
  mergeSort(a, aux, mid + 1, hi);
  if (!less(a[mid + 1], a[mid])) return;
  merge(a, aux, lo, mid, hi);
}

module.exports = mergeSort;
