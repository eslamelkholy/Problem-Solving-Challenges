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
var getMinimumDifference = function (root) {
  const nums = [];
  let MIN_DIFF = Number.MAX_SAFE_INTEGER;

  const inorder = (root) => {
    if (!root) return;

    inorder(root.left);
    nums.push(root.val);
    inorder(root.right);
  };

  inorder(root);

  for (let i = 1; i < nums.length; i++) {
    MIN_DIFF = Math.min(MIN_DIFF, nums[i] - nums[i - 1]);
  }

  return MIN_DIFF;
};
