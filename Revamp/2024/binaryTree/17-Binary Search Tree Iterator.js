/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
class BSTIterator {
  constructor(root) {
    this.root = root;
    this.values = [];
    this.pointer = 0;

    this.inorderTraverse(root);
  }
  /**
   * @return {number}
   */
  next() {
    return this.values[this.pointer++];
  }
  /**
   * @return {boolean}
   */
  hasNext() {
    return this.pointer < this.values.length;
  }

  inorderTraverse(root) {
    if (!root) return null;

    this.inorderTraverse(root.left);

    this.values.push(root.val);

    this.inorderTraverse(root.right);
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
