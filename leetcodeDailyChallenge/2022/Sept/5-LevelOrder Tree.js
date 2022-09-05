/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const n = queue.length;
    const levelNodes = [];

    for (let i = 0; i < n; i++) {
      const currentNode = queue.shift();
      levelNodes.push(currentNode.val);

      for (const child of currentNode.children) {
        queue.push(child);
      }
    }
    result.push(levelNodes);
  }

  return result;
};
