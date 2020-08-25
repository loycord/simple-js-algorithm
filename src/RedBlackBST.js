const RED = true;
const BLACK = false;

function RedBlackBST() {
  this.root = null;
}

RedBlackBST.Node = function (key, val, color) {
  this.key = key;
  this.val = val;
  this.left = null;
  this.right = null;
  this.color = color;
};

RedBlackBST.Node.isRed = function (x) {
  if (x == null) return false;
  return x.color === RED;
};

RedBlackBST.Node.rotateLeft = function (h) {
  const x = h.right;
  h.right = x.left;
  x.left = h;
  x.color = h.color;
  h.color = RED;
  return x;
};

RedBlackBST.Node.rotateRight = function (h) {
  const x = h.left;
  h.left = x.right;
  x.right = h;
  x.color = h.color;
  h.color = RED;
  return x;
};

RedBlackBST.Node.flipColors = function (h) {
  h.color = RED;
  h.left.color = BLACK;
  h.right.color = BLACK;
};

RedBlackBST.Node.put = function (h, key, val) {
  const that = RedBlackBST.Node;

  if (h == null) return new RedBlackBST.Node(key, val, RED);
  if (key < h.key) h.left = that.put(h.left, key, val);
  else if (key > h.key) h.right = that.put(h.right, key, val);
  else h.val = val;

  // only a few extra lines of code provides near-perfect balance.
  const _isRed = that.isRed;
  if (_isRed(h.right) && !_isRed(h.left)) h = that.rotateLeft(h);
  if (_isRed(h.left) && _isRed(h.left.left)) h = that.rotateRight(h);
  if (_isRed(h.left) && _isRed(h.right)) that.flipColors(h);

  return h;
};

RedBlackBST.prototype.put = function (key, val) {
  this.root = RedBlackBST.Node.put(this.root, key, val);
};

RedBlackBST.prototype.get = function (key) {
  let x = this.root;
  while (x != null) {
    if (key < x.key) x = x.left;
    else if (key > x.key) x = x.right;
    else return x.val;
  }
  return null;
};

module.exports = RedBlackBST;
