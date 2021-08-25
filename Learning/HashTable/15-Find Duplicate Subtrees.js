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

    let path = node.val.toString() + '-' + traversePreOrder(node.left) + '-' + traversePreOrder(node.right);

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
