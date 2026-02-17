/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  const queue = [root];
  if (!root) return root;

  while (queue.length > 0) {
    const N = queue.length;

    for (let i = 0; i < N; i++) {
      const currentNode = queue.shift();

      if (i === N - 1) currentNode.next = null;
      else currentNode.next = queue[0];

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  return root;
};
