/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let node = head;
  let totalNodes = 0;

  while (node) {
    totalNodes++;
    node = node.next;
  }

  let rest = totalNodes - n - 1;
  node = head;

  while (rest > 0) {
    node = node.next;
    rest--;
  }

  if (rest < 0) return node.next;

  node.next = node.next.next;
  return head;
};
