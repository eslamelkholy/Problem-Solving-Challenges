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
  const dfs = (root, previousVal) => {
    if (!root) return;

    const currentVal = root.val + previousVal;
    if (currentVal === targetSum && !root.left && !root.right) {
      result = true;
      return;
    }

    dfs(root.left, currentVal);
    dfs(root.right, currentVal);
  };

  dfs(root, 0);
  return result;
};
