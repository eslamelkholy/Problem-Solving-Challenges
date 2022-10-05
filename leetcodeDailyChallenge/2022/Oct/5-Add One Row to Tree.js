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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  const queue = [root];
  let currentLevel = 1;

  if (depth === 1) return new TreeNode(val, root);

  while (queue.length > 0) {
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const currentNode = queue.shift();

      if (currentLevel + 1 === depth) {
        currentNode.left = new TreeNode(val, currentNode.left);
        currentNode.right = new TreeNode(val, undefined, currentNode.right);
      }

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    currentLevel++;
  }
  return root;
};
