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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  const prefixSumMap = {};
  let targetSumCount = 0;

  const dfs = (root, currentSum) => {
    if (!root) return;

    currentSum += root.val;

    if (currentSum === targetSum) {
      targetSumCount++;
    }

    if (prefixSumMap[currentSum - targetSum] !== undefined) {
      targetSumCount += prefixSumMap[currentSum - targetSum];
    }

    prefixSumMap[currentSum]++ || (prefixSumMap[currentSum] = 1);

    dfs(root.left, currentSum);
    dfs(root.right, currentSum);

    prefixSumMap[currentSum]--;
  };

  dfs(root, 0);

  return targetSumCount;
};
