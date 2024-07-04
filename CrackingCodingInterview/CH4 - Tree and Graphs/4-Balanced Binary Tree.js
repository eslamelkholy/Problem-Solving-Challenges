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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;

  const heightDiff = getHeight(root.left) - getHeight(root.right);
  if (Math.abs(heightDiff) > 1) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
};

const getHeight = (root) => {
  if (!root) return -1;

  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
};
