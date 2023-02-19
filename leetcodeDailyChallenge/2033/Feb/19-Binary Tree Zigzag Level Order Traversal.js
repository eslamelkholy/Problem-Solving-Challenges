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
  const queue = [root];
  const result = [];
  let reverse = false;

  if (!root) return result;

  while (queue.length > 0) {
    const currentLevelValues = [];
    const N = queue.length;

    for (let i = 0; i < N; i++) {
      const current = queue.shift();

      currentLevelValues.push(current.val);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    reverse ? result.push(currentLevelValues.reverse()) : result.push(currentLevelValues);
    reverse = !reverse;
  }
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const queue = [root];
  const result = [];
  let reverse = false;

  if (!root) return result;

  while (queue.length > 0) {
    const currentLevelValues = [];
    const N = queue.length;

    for (let i = 0; i < N; i++) {
      const current = queue.shift();

      reverse ? currentLevelValues.unshift(current.val) : currentLevelValues.push(current.val);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    result.push(currentLevelValues);
    reverse = !reverse;
  }
  return result;
};
