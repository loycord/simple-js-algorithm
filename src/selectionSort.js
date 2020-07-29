// The number of compares and exchanges made by selection sort does not depend on the order of the input.
function selectionSort(a) {
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
    let min = i;
    for (let j = i + 1; j < N; j++) {
      if (less(a[j], a[min])) min = j;
    }
    exch(a, i, min);
  }

  return a;
}

module.exports = selectionSort;
