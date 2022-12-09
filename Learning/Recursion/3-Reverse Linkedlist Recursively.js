/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  return reverse(head);
};

const reverse = (head) => {
  if (!head || !head.next) return head;

  const node = reverse(head.next);

  head.next.next = head;
  head.next = null;

  return node;
};
