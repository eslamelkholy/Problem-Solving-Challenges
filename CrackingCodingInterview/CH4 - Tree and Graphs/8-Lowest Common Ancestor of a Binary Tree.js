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
  let result;

  const dfs = (root) => {
    if (!root) return 0;

    const left = dfs(root.left) ? 1 : 0;
    const right = dfs(root.right) ? 1 : 0;

    const mid = root === p || root === q ? 1 : 0;

    if (left + right + mid >= 2) {
      result = root;
    }

    return left + right + mid > 0;
  };
  dfs(root);

  return result;
};
