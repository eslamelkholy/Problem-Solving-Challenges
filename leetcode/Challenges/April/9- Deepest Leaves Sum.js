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
var deepestLeavesSum = function (root) {
  const result = {};
  const walk = (node, level) => {
    level++;
    if (node.left) walk(node.left, level);
    if (node.right) walk(node.right, level);
    if (!node.left && !node.right)
      result[level] ? (result[level] = [...result[level], node.val]) : (result[level] = [node.val]);
  };
  walk(root, 0);
  const levelsValues = Object.values(result);
  return levelsValues[levelsValues.length - 1].reduce((a, b) => a + b, 0);
};
