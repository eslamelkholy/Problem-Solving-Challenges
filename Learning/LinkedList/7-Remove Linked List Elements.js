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
  const sentinel = new ListNode(0, head);
  let prev = sentinel;
  let current = head;

  while (current) {
    if (current.val === val) {
      prev.next = current.next; // Changing Prev which Point to Sentinel
    } else {
      prev = current;
    }

    current = current.next;
  }

  return sentinel.next; // Which Pointer to prev
};
