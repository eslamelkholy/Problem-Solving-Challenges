/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
let LCA = null;
/**
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
  findLCA(root, startValue, destValue);

  const leftPath = findPath(LCA, startValue, "");
  const rightPath = findPath(LCA, destValue, "");

  return "U".repeat(leftPath.length) + rightPath;
};

const findPath = (root, target, currentPath) => {
  if (!root) return "";

  if (root.val === target) {
    return currentPath;
  }

  return findPath(root.left, target, currentPath + "L") + findPath(root.right, target, currentPath + "R");
};

const findLCA = (root, p, q) => {
  if (!root) return false;

  const left = findLCA(root.left, p, q) ? 1 : 0;
  const right = findLCA(root.right, p, q) ? 1 : 0;

  const mid = root.val === p || root.val === q ? 1 : 0;

  if (left + right + mid >= 2) {
    LCA = root;
  }

  return left + right + mid > 0;
};
