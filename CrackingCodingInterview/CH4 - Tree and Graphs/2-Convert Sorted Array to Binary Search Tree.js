/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return convert(nums, 0, nums.length - 1);
};

const convert = (nums, left, right) => {
  if (left > right) return null;

  const mid = Math.floor((left + right) / 2);
  const root = new TreeNode(nums[mid]);

  root.left = convert(nums, left, mid - 1);
  root.right = convert(nums, mid + 1, right);

  return root;
};
