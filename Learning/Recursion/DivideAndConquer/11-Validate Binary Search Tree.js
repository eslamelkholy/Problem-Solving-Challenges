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
  let prev = null;
  const inorder = (root) => {
    if (!root) return true;

    if (!inorder(root.left)) {
      return false;
    }
    if (prev !== null && root.val <= prev) {
      return false; // Because inorder IN BST always Sorted
    }

    prev = root.val;
    return inorder(root.right);
  };

  return inorder(root);
};
