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
  let LCA;

  const findLCA = (root) => {
    if (!root) return;

    const left = findLCA(root.left) ? 1 : 0;
    const right = findLCA(root.right) ? 1 : 0;
    const mid = root === p || root === q ? 1 : 0;

    if (left + right + mid >= 2) {
      LCA = root;
    }

    return left + right + mid > 0;
  };
  findLCA(root);

  return LCA;
};
