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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let counter = 0;
  let result;
  const inorder = (root) => {
    if (!root) return root;
    if (counter > k) return;
    inorder(root.left);

    counter++;
    if (counter === k) result = root.val;

    inorder(root.right);
  };

  inorder(root);
  return result;
};
