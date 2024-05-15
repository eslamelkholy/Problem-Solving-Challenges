/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let node = head;
  while (node && node.next) {
    if (node.next.val === val) {
      node.next = node.next.next;
      continue;
    }

    node = node.next;
  }

  if (head && head.val === val) head = head.next;

  return head;
};
