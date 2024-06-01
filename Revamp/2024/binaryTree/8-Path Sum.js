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
    if (!root) return;

    currentSum += root.val;
    if (currentSum === targetSum && !root.left && !root.right) {
      hasPath = true;
    }
    findPath(root.left, currentSum);
    findPath(root.right, currentSum);
  };
  findPath(root, 0);

  return hasPath;
};

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
  let exists = false;

  const dfs = (root, sum) => {
    if (!root) return sum;

    sum += root.val;
    if (sum === targetSum && !root.left && !root.right) {
      return (exists = true);
    }

    dfs(root.left, sum);
    dfs(root.right, sum);
  };
  dfs(root, 0);

  return exists;
};
