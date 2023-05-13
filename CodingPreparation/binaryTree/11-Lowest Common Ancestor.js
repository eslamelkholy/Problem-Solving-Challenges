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
function lowestCommonAncestor(root, p, q) {
  let ans = null;

  const recurseTree = (root, p, q) => {
    if (!root) return false;

    const left = recurseTree(root.left, p, q) ? 1 : 0;
    const right = recurseTree(root.right, p, q) ? 1 : 0;

    const mid = root === p || root === q ? 1 : 0;

    if (left + right + mid >= 2) {
      ans = root;
    }

    return left + right + mid > 0;
  };
  recurseTree(root, p, q);

  return ans;
}
