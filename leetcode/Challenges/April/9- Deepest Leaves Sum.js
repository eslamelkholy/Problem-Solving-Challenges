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
  let maxLevel = 0;
  const walk = (node, level) => {
    level++;
    if (level > maxLevel) maxLevel = level;
    if (node.left) walk(node.left, level);
    if (node.right) walk(node.right, level);
    result[level] ? (result[level] = [...result[level], node.val]) : (result[level] = [node.val]);
  };
  walk(root, 0);
  return result[maxLevel].reduce((a, b) => a + b, 0);
};
