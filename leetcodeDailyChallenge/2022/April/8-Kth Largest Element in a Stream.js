/**
 * @param {number} x
 */
class Node {
  constructor(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
}

/**
 * @param {number} x
 */
class BinarySearchTree {
  constructor(x) {
    this.root = new Node(x);
  }
  /**
   * @param {number} x
   */
  add(x) {
    let curr = this.root;
    if (x < curr.val) {
      curr.left ? curr.left.add(x) : (curr.left = new BinarySearchTree(x));
    } else {
      curr.right ? curr.right.add(x) : (curr.right = new BinarySearchTree(x));
    }
  }
  /**
   * @param {number} k
   */
  search(k) {
    const stack = [],
      inorder = [];
    let curr = this;
    while (curr || stack.length) {
      while (curr) {
        stack.push(curr);
        curr = curr.root ? curr.root.right : null;
      }
      curr = stack.pop();
      inorder.push(curr.root.val);
      curr = curr.root ? curr.root.left : null;
      if (inorder.length === k) {
        return inorder.pop();
      }
    }
    return null;
  }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.head = null;
  for (let i = 0; i < nums.length; i++) {
    this.head ? this.head.add(nums[i]) : (this.head = new BinarySearchTree(nums[i]));
  }
  this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.head ? this.head.add(val) : (this.head = new BinarySearchTree(val));
  return this.head.search(this.k);
};
