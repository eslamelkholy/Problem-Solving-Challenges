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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const result = [];
  const inorder = (root) => {
    if (!root) return;

    inorder(root.left);

    result.push(root.val);

    inorder(root.right);
  };
  inorder(root);

  for (let i = 1; i < result.length; i++) {
    if (result[i - 1] >= result[i]) return false;
  }

  return true;
};
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let currentVal = Number.MIN_SAFE_INTEGER;
  let result = true;

  const inorder = (root) => {
    if (!root) return;

    inorder(root.left);

    if (root.val <= currentVal) {
      return (result = false);
    }
    currentVal = root.val;

    inorder(root.right);
  };

  inorder(root);
  return result;
};
