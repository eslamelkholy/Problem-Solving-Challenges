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
var maxAncestorDiff = function (root) {
  let result = 0;
  if (!root) return result;

  const dfs = (root, currentMax, currentMin) => {
    if (!root) return;

    const maxDiff = Math.max(Math.abs(currentMax - root.val), Math.abs(currentMin - root.val));
    result = Math.max(result, maxDiff);

    currentMax = Math.max(currentMax, root.val);
    currentMin = Math.min(currentMin, root.val);
    dfs(root.left, currentMax, currentMin);
    dfs(root.right, currentMax, currentMin);
  };

  dfs(root, root.val, root.val);

  return result;
};
