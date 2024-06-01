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
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const levelVals = [];
  const queue = [root];
  let reverse = false;

  while (queue.length > 0) {
    const N = queue.length;
    const level = [];

    for (let i = 0; i < N; i++) {
      const currentNode = queue.shift();

      level.push(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    levelVals.push(reverse ? level.reverse() : level);
    reverse = !reverse;
  }

  return levelVals;
};
