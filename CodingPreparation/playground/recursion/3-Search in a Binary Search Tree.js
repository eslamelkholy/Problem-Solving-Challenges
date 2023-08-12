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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let result = null;

  const inorderTraverse = (root) => {
    if (!root) return null;

    if (root.val === val) {
      return (result = root);
    }

    inorderTraverse(root.left);
    inorderTraverse(root.right);
  };
  inorderTraverse(root);

  return result;
};
