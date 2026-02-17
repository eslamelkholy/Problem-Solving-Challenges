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
  let hasPath = false;

  const pathSum = (root, currentSum) => {
    if (!root) return;

    currentSum += root.val;
    if (currentSum === targetSum && !root.right && !root.left) {
      hasPath = true;
      return;
    }

    pathSum(root.left, currentSum);
    pathSum(root.right, currentSum);
  };
  pathSum(root, 0);

  return hasPath;
};
