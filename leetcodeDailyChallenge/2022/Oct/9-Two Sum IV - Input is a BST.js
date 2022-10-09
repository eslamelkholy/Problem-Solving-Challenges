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
  const numSet = new Set();
  let result = false;

  const dfs = (root) => {
    if (!root) return;
    numSet.add(root.val);
    const rest = k - root.val;

    if (numSet.has(rest) && rest !== root.val) {
      result = true;
      return;
    }

    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return result;
};
