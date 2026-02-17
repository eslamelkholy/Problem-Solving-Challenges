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
  let max = 1;
  if (!root) return 0;

  const inorder = (root, currentDepth) => {
    if (!root) return;

    max = Math.max(max, currentDepth);
    currentDepth++;

    inorder(root.left, currentDepth);
    inorder(root.right, currentDepth);
  };

  inorder(root, 1);
  return max;
};
