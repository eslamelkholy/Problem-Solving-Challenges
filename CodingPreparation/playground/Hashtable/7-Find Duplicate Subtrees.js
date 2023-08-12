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
  const treeMap = new Map();
  const resultMap = {};

  const findAllPaths = (root) => {
    if (!root) return "";

    const concatTree = root.val + "-" + findAllPaths(root.left) + "-" + findAllPaths(root.right);

    if (treeMap.has(concatTree)) {
      resultMap[concatTree] = root;
    }

    treeMap.set(concatTree, root);

    return concatTree;
  };

  findAllPaths(root);

  return Object.values(resultMap);
};
