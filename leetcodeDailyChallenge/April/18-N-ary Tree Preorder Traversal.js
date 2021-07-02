/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  const result = [];
  if (!root) return result;
  const walk = (node) => {
    result.push(node.val);
    for (const childNode of node.children) walk(childNode);
  };
  walk(root);
  return result;
};
