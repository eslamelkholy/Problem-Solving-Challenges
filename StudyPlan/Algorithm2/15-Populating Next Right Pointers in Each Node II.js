/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;

  const queue = [root];

  while (queue.length > 0) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const currentNode = queue.shift();
      if (i === n - 1) currentNode.next = null;
      else currentNode.next = queue[0];

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
  return root;
};
