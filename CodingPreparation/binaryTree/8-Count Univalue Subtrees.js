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
 * @return {number}
 */
var countUnivalSubtrees = function (root) {
  let count = 0;

  const dfs = (root) => {
    if (!root) return true;

    const left = dfs(root.left);
    const right = dfs(root.right);

    if (left && right) {
      if (root.left && root.left.val !== root.val) return false;

      if (root.right && root.right.val !== root.val) return false;

      count++;
      return true;
    }

    return false;
  };

  dfs(root);

  return count;
};
