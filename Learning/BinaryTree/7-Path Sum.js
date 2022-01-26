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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let hasPath = false;
  const traverseTree = (root, prevValue = 0) => {
    if (!root) return;

    prevValue += root.val;
    if (!root.left && !root.right && prevValue === targetSum) hasPath = true;
    traverseTree(root.left, prevValue);
    traverseTree(root.right, prevValue);
  };

  traverseTree(root);
  return hasPath;
};
