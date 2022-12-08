/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const leftLeafs = [];
  const rightLeafs = [];
  const dfs = (root, leafs) => {
    if (!root) return;

    if (!root.left && !root.right) leafs.push(root.val);

    dfs(root.left, leafs);
    dfs(root.right, leafs);
  };

  dfs(root1, leftLeafs);
  dfs(root2, rightLeafs);

  for (let i = 0; i < leftLeafs.length; i++) {
    if (leftLeafs[i] !== rightLeafs[i]) return false;
  }

  return leftLeafs.length === rightLeafs.length && true;
};
