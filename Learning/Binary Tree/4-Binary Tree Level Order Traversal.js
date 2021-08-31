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
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length !== 0) {
    const levelValues = [];
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const node = queue.pop();

      levelValues.push(node.val);

      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
    }

    result.push(levelValues);
  }

  return result;
};
