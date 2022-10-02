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
  let roots = {};
  let result = [];
  function traversePreOrder(node) {
    if (!node) return;

    let path = node.val.toString() + "-" + traversePreOrder(node.left) + "-" + traversePreOrder(node.right);

    if (!roots[path]) {
      roots[path] = 1;
    } else if (roots[path] == 1) {
      result.push(node);
      roots[path]++;
    }
    return path;
  }

  traversePreOrder(root);
  return result;
};

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
  const subTreesMap = new Map();
  const resultMap = {};

  const findAllPaths = (root) => {
    if (!root) return "";

    let concatTree = root.val + "-" + findAllPaths(root.left) + "-" + findAllPaths(root.right);

    if (subTreesMap.has(concatTree)) {
      resultMap[concatTree] = root;
    }
    subTreesMap.set(concatTree, root);
    return concatTree;
  };

  findAllPaths(root);
  return Object.values(resultMap);
};
