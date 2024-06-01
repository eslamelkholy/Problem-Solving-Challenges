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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const queue = [root];
  const averageLevels = [];

  while (queue.length > 0) {
    const N = queue.length;
    let sum = 0;

    for (let i = 0; i < N; i++) {
      const currentNode = queue.shift();
      if (!currentNode) continue;

      sum += currentNode.val;

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    averageLevels.push(sum / N);
  }

  return averageLevels;
};
