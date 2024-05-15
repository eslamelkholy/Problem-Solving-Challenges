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
  let size = 0;
  let counterNode = head;
  let node = head;

  while (counterNode) {
    size++;
    counterNode = counterNode.next;
  }

  const rest = size - n;
  if (rest === 0) return node.next;

  for (let i = 0; i < rest - 1; i++) {
    node = node.next;
  }
  node.next = node.next.next;

  return head;
};
