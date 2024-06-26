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
    const N = queue.length;

    for (let i = 0; i < N; i++) {
      const currentNode = queue.shift();

      currentNode.next = i === N - 1 ? null : queue[0];

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  return root;
};

// Note this algorithm is like Level order traverse but with some edits
