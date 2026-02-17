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
  let result = null;

  const LCA = (root) => {
    if (!root) return false;

    const left = LCA(root.left) ? 1 : 0;
    const right = LCA(root.right) ? 1 : 0;
    const mid = root === p || root === q ? 1 : 0;

    if (left + right + mid >= 2) {
      result = root;
    }

    return left + right + mid > 0;
  };

  LCA(root);

  return result;
};
