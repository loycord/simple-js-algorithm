function LinkedStack() {
  this.first = null;
}

LinkedStack.Node = function (item, next = null) {
  this.item = item;
  this.next = next;
};

LinkedStack.prototype.isEmpty = function () {
  return this.first === null;
};

LinkedStack.prototype.push = function (item) {
  const oldFirst = this.first;
  this.first = new LinkedStack.Node(item, oldFirst);
};

LinkedStack.prototype.pop = function () {
  const item = this.first;
  this.first = this.first.next;
  return item;
};

LinkedStack.prototype.toArray = function () {
  const result = [];
  let current = this.first;
  while (current !== null) {
    result.push(current.item);
    current = current.next;
  }

  return result;
};

module.exports = LinkedStack;
