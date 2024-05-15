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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const map = {};
  const result = {};

  const dfs = (root) => {
    if (!root) return;

    const currentNode = root.val + "," + dfs(root.left) + "," + dfs(root.right);

    if (map[currentNode]) {
      result[currentNode] = root;
    }

    map[currentNode] = currentNode;
    return currentNode;
  };

  dfs(root);
  return Object.values(result);
};
