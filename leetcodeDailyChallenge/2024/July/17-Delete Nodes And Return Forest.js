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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  const toBeDeleted = new Set(to_delete);
  const forest = [];

  const dfs = (root) => {
    if (!root) return null;

    root.left = dfs(root.left);
    root.right = dfs(root.right);

    if (toBeDeleted.has(root.val)) {
      if (root.left) {
        forest.push(root.left);
      }

      if (root.right) {
        forest.push(root.right);
      }

      return null;
    }

    return root;
  };

  root = dfs(root);
  if (root) forest.push(root);

  return forest;
};
