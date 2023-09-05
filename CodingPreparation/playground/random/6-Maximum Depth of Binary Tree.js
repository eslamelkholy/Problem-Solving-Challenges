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
 * @return {number}
 */
var maxDepth = function (root) {
  let maxD = 0;

  const dfs = (root, currentDepth) => {
    if (!root) return currentDepth;

    maxD = Math.max(maxD, currentDepth);

    dfs(root.left, currentDepth + 1);
    dfs(root.right, currentDepth + 1);
  };
  dfs(root, 1);

  return maxD;
};
