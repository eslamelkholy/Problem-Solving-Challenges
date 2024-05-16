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
var postorderTraversal = function (root) {
  const nums = [];

  const inorder = (root) => {
    if (!root) return;

    inorder(root.left);
    inorder(root.right);

    nums.push(root.val);
  };
  inorder(root);

  return nums;
};
