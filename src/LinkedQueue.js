function LinkedQueue() {
  this.first = null;
  this.last = null;
}

LinkedQueue.Node = function (item, next = null) {
  this.item = item;
  this.next = next;
};

LinkedQueue.prototype.isEmpty = function () {
  return this.first === null;
};

LinkedQueue.prototype.enqueue = function (item) {
  const oldLast = this.last;
  this.last = new LinkedQueue.Node(item);
  if (this.isEmpty()) this.first = this.last;
  else oldLast.next = this.last;
};

LinkedQueue.prototype.dequeue = function () {
  const item = this.first.item;
  this.first = this.first.next;
  if (this.isEmpty()) this.last = null;
  return item;
};

LinkedQueue.prototype.toArray = function () {
  const result = [];
  let current = this.first;
  while (current !== null) {
    result.push(current.item);
    current = current.next;
  }

  return result;
};

module.exports = LinkedQueue;
