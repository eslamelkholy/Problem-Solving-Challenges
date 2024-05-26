/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const map = {};

  return traverse(node, map);
};

const traverse = (node, map) => {
  if (!node) return node;

  if (map[node.val] === undefined) {
    map[node.val] = new Node(node.val);
    map[node.val].neighbors = node.neighbors.map((neighbor) => traverse(neighbor, map));
  }

  return map[node.val];
};
