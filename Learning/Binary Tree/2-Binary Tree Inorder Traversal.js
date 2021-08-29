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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  const binaryTreeTraverse = (root) => {
    if (!root) return;
    binaryTreeTraverse(root.left);
    result.push(root.val);
    binaryTreeTraverse(root.right);
  };
  binaryTreeTraverse(root);
  return result;
};
