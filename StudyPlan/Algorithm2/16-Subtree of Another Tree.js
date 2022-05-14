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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  let subTreeIdentical = false;
  const dfs = (root) => {
    if (!root) return null;

    if (root.val === subRoot.val && isIdentical(subRoot.left, root.left) && isIdentical(subRoot.right, root.right)) {
      subTreeIdentical = true;
    }

    dfs(root.left);
    dfs(root.right);
  };

  const isIdentical = (sub, tree) => {
    if (!sub && !tree) return true;
    if ((tree && !sub) || (sub && !tree) || sub.val !== tree.val) return false;

    return isIdentical(sub.left, tree.left) && isIdentical(sub.right, tree.right);
  };
  dfs(root);

  return subTreeIdentical;
};
