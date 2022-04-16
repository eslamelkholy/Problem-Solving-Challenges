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

      // Here We are checking if this is the last node in our [Level] so if this is the last we put it to point to Null
      if (i === n - 1) {
        currentNode.next = null;
      } else {
        currentNode.next = queue[0];
      }

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
  return root;
};

/**
 * Note this Algorithm also used for Level Traverse
 * So if i need to Traverse Binary Tree Level By Level we are using this Queue
 * also used for Graphs
 */
