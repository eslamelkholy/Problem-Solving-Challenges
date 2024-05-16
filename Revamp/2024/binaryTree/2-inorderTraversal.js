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
  const nums = [];

  const inorder = (root) => {
    if (!root) return;

    inorder(root.left);

    nums.push(root.val);

    inorder(root.right);
  };
  inorder(root);

  return nums;
};
