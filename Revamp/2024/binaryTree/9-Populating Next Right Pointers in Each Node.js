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
  if (!root) return null;
  const queue = [root];

  while (queue.length > 0) {
    const N = queue.length; // Current size of N
    for (let i = 0; i < N; i++) {
      const currentNode = queue.shift();
      if (!currentNode) continue;

      currentNode.next = i === N - 1 ? null : queue[0];

      queue.push(currentNode.left);
      queue.push(currentNode.right);
    }
  }

  return root;
};

// Note this algorithm is like Level order traverse but with some edits
