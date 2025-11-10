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
  let max = 0;

  const dfs = (root, currentMax) => {
    if (!root) return;

    currentMax++;
    max = Math.max(max, currentMax);

    dfs(root.left, currentMax);
    dfs(root.right, currentMax);
  };
  dfs(root, max);

  return max;
};
