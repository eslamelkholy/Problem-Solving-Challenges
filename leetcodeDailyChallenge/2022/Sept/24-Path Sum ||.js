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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = [];

  const dfs = (root, nodes, currentSum) => {
    if (!root) return;

    currentSum += root.val;
    nodes.push(root.val);

    if (currentSum === targetSum && !root.left && !root.right) {
      result.push(nodes);
    }

    dfs(root.left, [...nodes], currentSum);
    dfs(root.right, [...nodes], currentSum);
  };
  dfs(root, [], 0);

  return result;
};
