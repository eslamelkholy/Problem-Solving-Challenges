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
var rightSideView = function (root) {
  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const N = queue.length;

    for (let i = 0; i < N; i++) {
      const currentNode = queue.shift();
      if (!currentNode) continue;

      if (i === N - 1) result.push(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  return result;
};
