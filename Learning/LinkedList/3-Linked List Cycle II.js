/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const visited = new Set();
  let node = head;

  while (node) {
    if (visited.has(node)) return node;

    visited.add(node);
    node = node.next;
  }

  return null;
};
