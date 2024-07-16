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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
let lowestCommonAncestor = null;
var getDirections = function (root, startValue, destValue) {
  findLCA(root, startValue, destValue);

  console.log(lowestCommonAncestor);
  const pathToStart = [];
  const pathToDest = [];

  findPath(lowestCommonAncestor, startValue, pathToStart);
  findPath(lowestCommonAncestor, destValue, pathToDest);

  const result = pathToStart.map((val) => (val = "U")).join("") + pathToDest.join("");

  return result;
};

const findPath = (root, target, path) => {
  if (!root) return false;

  if (root.val === target) {
    return true;
  }

  path.push("L");
  if (findPath(root.left, target, path)) {
    return true;
  }
  path.pop();

  path.push("R");

  if (findPath(root.right, target, path)) {
    return true;
  }

  path.pop();

  return false;
};

const findLCA = (root, startValue, destValue) => {
  if (!root) return false;
  const left = findLCA(root.left, startValue, destValue) ? 1 : 0;
  const right = findLCA(root.right, startValue, destValue) ? 1 : 0;

  const mid = root.val === startValue || root.val === destValue ? 1 : 0;

  if (left + right + mid >= 2) {
    lowestCommonAncestor = root;
  }

  return left + right + mid > 0;
};
