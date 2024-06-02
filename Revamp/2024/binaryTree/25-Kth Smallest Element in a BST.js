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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const nums = [];

  const inorder = (root) => {
    if (!root) return;

    inorder(root.left);

    nums.push(root.val);

    inorder(root.right);
  };
  inorder(root);

  return nums[k - 1];
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let result;
  const inorder = (root) => {
    if (!root) return;

    inorder(root.left);

    k--;
    if (k === 0) {
      return (result = root.val);
    }

    inorder(root.right);
  };
  inorder(root);

  return result;
};
