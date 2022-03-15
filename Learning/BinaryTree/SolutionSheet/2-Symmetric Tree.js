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
var isSymmetric = function (root) {
  if (!root) return true;
  const traverseTree = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;

    const symmetric = traverseTree(left.right, right.left);
    const treeVal = traverseTree(left.left, right.right);

    return left.val === right.val && symmetric && treeVal;
  };

  return traverseTree(root.left, root.right);
};
