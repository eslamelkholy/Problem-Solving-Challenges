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
  let prev = Number.MIN_SAFE_INTEGER;
  let result = true;

  const inorder = (root) => {
    if (!root) return;

    inorder(root.left);

    if (root.val <= prev) {
      return (result = false);
    }

    prev = root.val;

    inorder(root.right);
  };
  inorder(root);
  return result;
};
