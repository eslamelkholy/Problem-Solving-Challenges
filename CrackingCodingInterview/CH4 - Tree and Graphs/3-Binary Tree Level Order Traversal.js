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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];
  const queue = [root];
  if (!root) return [];

  while (queue.length > 0) {
    const N = queue.length;
    const levelVals = [];
    for (let i = 0; i < N; i++) {
      const currentNode = queue.shift();

      levelVals.push(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    result.push(levelVals);
  }

  return result;
};
