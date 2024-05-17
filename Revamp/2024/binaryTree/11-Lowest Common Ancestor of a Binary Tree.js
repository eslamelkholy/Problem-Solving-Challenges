/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ans = null;
  const dfs = (root) => {
    if (!root) return false;

    const left = dfs(root.left) ? 1 : 0;
    const right = dfs(root.right) ? 1 : 0;
    const mid = root === p || root === q ? 1 : 0;

    if (left + right + mid >= 2) {
      ans = root;
    }

    return left + right + mod > 0;
  };

  dfs(root);

  return ans;
};
