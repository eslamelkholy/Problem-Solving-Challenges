/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function (nums) {
  const low = 0;
  const high = nums.length;
  const mid = Math.floor((low + high) / 2);
  if (nums.length === 0) return null;

  const root = new TreeNode(nums[mid]);
  root['left'] = sortedArrayToBST(nums.slice(low, mid));
  root['right'] = sortedArrayToBST(nums.slice(mid + 1, high));

  return root;
};

// console.log(sortedArrayToBST([0]));
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
