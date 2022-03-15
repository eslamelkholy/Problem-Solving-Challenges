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
  let result = false;

  const dfs = (root, sum) => {
    if (!root) return;

    sum += root.val;
    if (sum === targetSum && !root.left && !root.right) {
      result = true;
    }
    dfs(root.left, sum);
    dfs(root.right, sum);
  };
  dfs(root, 0);
  return result;
};
