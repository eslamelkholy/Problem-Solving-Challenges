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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let hasSum = false;
  const sum = (root, currentSum) => {
    if (!root) return;

    currentSum += root.val;

    if (currentSum === targetSum && !root.right && !root.left) {
      hasSum = true;
      return;
    }

    sum(root.left, currentSum);
    sum(root.right, currentSum);
  };
  sum(root, 0);

  return hasSum;
};
