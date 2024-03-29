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
// Top-Down Solution
var maxDepth = function (root) {
  let maxDepthCounter = 0;
  const dfs = (root, maxVal) => {
    if (!root) return;

    maxVal += 1;
    maxDepthCounter = Math.max(maxDepthCounter, maxVal);

    dfs(root.left, maxVal);
    dfs(root.right, maxVal);
  };

  dfs(root, maxDepthCounter);
  return maxDepthCounter;
};

// Bottom-Up Solution

var maxDepth = function (root) {
  if (!root) return 0;

  const left_depth_ans = maxDepth(root.left);
  const right_depth_ans = maxDepth(root.right);

  return Math.max(left_depth_ans, right_depth_ans) + 1;
};
