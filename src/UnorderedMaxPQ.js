// Priority queue
function UnorderedMaxPQ() {
  this.pq = [];
  this.N = 0;
}

UnorderedMaxPQ.prototype.exch = function (i, j) {
  const swap = this.pq[i];
  this.pq[i] = this.pq[j];
  this.pq[j] = swap;
};

UnorderedMaxPQ.prototype.less = function (i, j) {
  return this.pq[i] < this.pq[j];
};

UnorderedMaxPQ.prototype.isEmpty = function () {
  return this.N === 0;
};

UnorderedMaxPQ.prototype.insert = function (x) {
  this.pq[this.N++] = x;
};

UnorderedMaxPQ.prototype.delMax = function () {
  let max = 0;
  for (let i = 1; i < this.N; i++) {
    if (this.less(max, i)) max = i;
  }
  this.exch(max, this.N - 1);
  return this.pq[--this.N];
};

module.exports = UnorderedMaxPQ;
