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
 * @return {string}
 */
var tree2str = function (root) {
  let result = "";
  const preOrderTraverse = (root) => {
    if (!root) return "";

    if (root.left === null && root.right === null) return (result = root.val + "");

    if (root.right === null) {
      return (result = root.val + "(" + preOrderTraverse(root.left) + ")");
    }

    return (result = root.val + "(" + preOrderTraverse(root.left) + ")(" + preOrderTraverse(root.right) + ")");
  };

  preOrderTraverse(root);
  return result;
};
