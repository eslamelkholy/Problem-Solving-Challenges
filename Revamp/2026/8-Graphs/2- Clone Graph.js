/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  const map = {};

  return traverse(map, node);
};

const traverse = (map, node) => {
  if (!node) return node;

  if (map[node.val] === undefined) {
    map[node.val] = new _Node(node.val);
    map[node.val].neighbors = node.neighbors.map((neighbor) =>
      traverse(map, neighbor)
    );
  }

  return map[node.val];
};
