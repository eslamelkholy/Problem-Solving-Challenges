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
  let length = 0;

  while (node) {
    length++;
    node = node.next;
  }

  nthNode = length - n - 1;
  node = head;

  while (nthNode > 0) {
    node = node.next;
    nthNode--;
  }

  if (nthNode < 0) return node.next;

  node.next = node.next.next;

  return head;
};
