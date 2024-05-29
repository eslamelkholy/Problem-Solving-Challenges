/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let copyMap = new Map();

  const cloneNode = (node) => {
    if (!node) return node;

    if (copyMap.has(node)) return copyMap.get(node);

    const newNode = new Node(node.val);
    copyMap.set(node, newNode);

    newNode.next = cloneNode(node.next);
    newNode.random = cloneNode(node.random);
    return newNode;
  };

  return cloneNode(head);
};
