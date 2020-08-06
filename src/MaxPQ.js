function MaxPQ() {
  this.pq = [0];
  this.N = 0;
}

MaxPQ.prototype.isEmpty = function () {
  return this.N === 0;
};

MaxPQ.prototype.insert = function (x) {
  this.pq[++this.N] = x;
  this.swim(this.N);
};

MaxPQ.prototype.delMax = function () {
  const max = this.pq[1];
  this.exch(1, this.N--);
  this.sink(1);
  this.pq.pop();
  return max;
};

MaxPQ.prototype.swim = function (k) {
  while (k > 1 && this.less(parseInt(k / 2), k)) {
    this.exch(k, parseInt(k / 2));
    k = k / 2;
  }
};

MaxPQ.prototype.sink = function (k) {
  while (2 * k <= this.N) {
    let j = 2 * k;
    if (j < this.N && this.less(j, j + 1)) j++;
    if (!this.less(k, j)) break;
    this.exch(k, j);
    k = j;
  }
};

MaxPQ.prototype.less = function (i, j) {
  return this.pq[i] < this.pq[j];
};

MaxPQ.prototype.exch = function (i, j) {
  const t = this.pq[i];
  this.pq[i] = this.pq[j];
  this.pq[j] = t;
};

module.exports = MaxPQ;
