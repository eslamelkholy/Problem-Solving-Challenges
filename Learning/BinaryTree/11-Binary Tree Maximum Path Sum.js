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
 * @return {number}
 */
var maxPathSum = function (root) {
  let maxPath = Number.MIN_SAFE_INTEGER;

  const sumTree = (root) => {
    if (!root) return 0;

    const leftSum = Math.max(sumTree(root.left), 0);
    const rightSum = Math.max(sumTree(root.right), 0);

    const subTreeMaxPath = Math.max(leftSum, rightSum) + root.val;
    maxPath = Math.max(maxPath, leftSum + rightSum + root.val);

    return subTreeMaxPath;
  };
  sumTree(root);

  return maxPath;
};
