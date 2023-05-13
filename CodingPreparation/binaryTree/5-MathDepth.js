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
  let maxDepth = 0;

  const traverse = (root, currentDepth) => {
    if (!root) return;

    maxDepth = Math.max(currentDepth, maxDepth);

    traverse(root.left, currentDepth + 1);
    traverse(root.right, currentDepth + 1);
  };
  traverse(root, 1);

  return maxDepth;
};
