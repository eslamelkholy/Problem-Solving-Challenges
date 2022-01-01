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
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const values = new Set();
  const walkThroughTree = (root) => {
    if (!root) return null;
    values.add(root.val);
    walkThroughTree(root.left);
    walkThroughTree(root.right);
  };
  walkThroughTree(root);
  for (const val of values) if (values.has(k - val) && k - val !== val) return true;

  return false;
};
