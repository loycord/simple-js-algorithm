const LinkedQueue = require("./LinkedQueue");

// Binary Search Tree
function BST() {
  this.root = null;
}

BST.Node = function (key, value) {
  this.key = key;
  this.value = value;
  this.left = null;
  this.right = null;
  this.count = 1;
};

BST.prototype.rank = function (key) {
  return this.rankNode(key, this.root);
};

BST.prototype.rankNode = function (key, x) {
  if (x === null) return 0;
  if (key < x.key) return this.rankNode(key, x.left);
  else if (key > x.key) {
    return 1 + this.sizeNode(x.left) + this.rankNode(key, x.right);
  } else return this.sizeNode(x.left);
};

BST.prototype.size = function () {
  return this.sizeNode(this.root);
};

BST.prototype.sizeNode = function (x) {
  if (!x) return 0;
  return x.count;
};

BST.prototype.put = function (key, value) {
  this.root = this.putNode(this.root, key, value);
};

BST.prototype.putNode = function (x, key, value) {
  if (x === null) return new BST.Node(key, value);
  if (key < x.key) {
    x.left = this.putNode(x.left, key, value);
  } else if (key > x.key) {
    x.right = this.putNode(x.right, key, value);
  } else {
    x.value = value;
  }
  x.count = 1 + this.sizeNode(x.left) + this.sizeNode(x.right);
  return x;
};

BST.prototype.get = function (key) {
  let x = this.root;
  while (x !== null) {
    if (key < x.key) x = x.left;
    else if (key > x.key) x = x.right;
    else return x.value;
  }
  return null;
};

BST.prototype.delete = function (key) {
  this.root = this.deleteNode(this.root, key);
};

BST.prototype.deleteNode = function (x, key) {
  if (x === null) return null;
  if (key < x.key) x.left = this.deleteNode(x.left, key);
  else if (key > x.key) x.right = this.deleteNode(x.right, key);
  else {
    if (x.right === null) return x.left;
    if (x.left === null) return x.right;

    const t = x;
    x = this.min(t.right);
    x.right = this.deleteMinNode(t.right);
    x.left = t.left;
  }
  x.count = this.sizeNode(x.left) + this.sizeNode(x.right) + 1;
  return x;
};

BST.prototype.min = function (x) {
  const m = this.minNode(this.root);
  return m.value;
};

BST.prototype.minNode = function (x) {
  if (x.left === null) return x;
  return this.minNode(x.left);
};

BST.prototype.floor = function (key) {
  const x = this.floorNode(this.root, key);
  if (x !== null) return null;
  return x.key;
};

BST.prototype.floorNode = function (x, key) {
  if (x === null) return null;

  if (key === x.key) return x;

  if (key < x.key) return this.floorNode(x.left, key);

  const t = this.floorNode(x.right, key);
  if (t !== null) return t;
  else return x;
};

BST.prototype.deleteMin = function () {
  this.root = this.deleteMinNode(this.root);
};

BST.prototype.deleteMinNode = function (x) {
  if (x.left === null) return x.right;
  x.left = this.deleteMinNode(x.left);
  x.count = 1 + this.sizeNode(x.left) + this.sizeNode(x.right);
  return x;
};

BST.prototype.keys = function () {
  const q = new LinkedQueue();
  this.inorder(this.root, q);
  return q;
};

BST.prototype.inorder = function (x, q) {
  if (x === null) return;
  this.inorder(x.left, q);
  q.enqueue(x.key);
  this.inorder(x.right, q);
};

module.exports = BST;
