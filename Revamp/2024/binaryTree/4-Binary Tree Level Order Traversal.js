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
  const result = [];
  if (!root) return result;

  while (queue.length > 0) {
    const N = queue.length;
    const levelValues = [];

    for (let i = 0; i < N; i++) {
      const current = queue.shift();

      levelValues.push(current.val);
      if (current.left) queue.push(current.left);

      if (current.right) queue.push(current.right);
    }
    result.push(levelValues);
  }

  return result;
};
