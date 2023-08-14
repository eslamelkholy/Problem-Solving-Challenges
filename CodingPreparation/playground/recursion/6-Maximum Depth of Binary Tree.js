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

  const inorderTraverse = (root, currentDepth) => {
    if (!root) return currentDepth;

    maxDepth = Math.max(maxDepth, currentDepth);

    inorderTraverse(root.left, currentDepth + 1);
    inorderTraverse(root.right, currentDepth + 1);
  };

  inorderTraverse(root, 1);

  return maxDepth;
};
