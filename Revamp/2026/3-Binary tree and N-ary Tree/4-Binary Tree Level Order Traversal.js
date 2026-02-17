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
  const queue = [root];
  const levelResults = [];
  if (!root) return levelResults;

  while (queue.length > 0) {
    const N = queue.length;
    const currentLevel = [];

    for (let i = 0; i < N; i++) {
      currentNode = queue.shift();

      currentLevel.push(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    levelResults.push(currentLevel);
  }

  return levelResults;
};
