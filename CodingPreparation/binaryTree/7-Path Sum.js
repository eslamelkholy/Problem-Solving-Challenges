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

  const findPath = (root, currentSum) => {
    if (!root) return false;

    const totalSum = currentSum + root.val;

    if (totalSum === targetSum && !root.left && !root.right) {
      hasPath = true;
    }

    findPath(root.left, totalSum);
    findPath(root.right, totalSum);
  };

  findPath(root, 0);

  return hasPath;
};

var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  targetSum -= root.val;
  if (targetSum === 0 && !root.left && !root.right) return true;

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};
