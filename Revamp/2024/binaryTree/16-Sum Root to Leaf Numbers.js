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
var sumNumbers = function (root) {
  const nums = [];

  const dfs = (root, path) => {
    if (!root) return null;

    path.push(root.val);

    if (!root.left && !root.right) {
      return nums.push(path);
    }

    dfs(root.left, [...path]);
    dfs(root.right, [...path]);
  };

  dfs(root, []);

  return nums.reduce((partialSum, a) => partialSum + Number(a.join("")), 0);
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
 * @return {number}
 */
var sumNumbers = function (root) {
  let total = 0;
  const sum = (root, currentPath) => {
    if (!root) return;

    currentPath += root.val;
    if (!root.left && !root.right) {
      total += Number(currentPath);
    }

    sum(root.left, currentPath);
    sum(root.right, currentPath);
  };

  sum(root, "");

  return total;
};
