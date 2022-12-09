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
var swapPairs = function (head) {
  const result = head;
  swap(head);
  return result;
};

const swap = (head) => {
  if (!head || !head.next) return;

  const temp = head.val;
  head.val = head.next.val;
  head.next.val = temp;

  swap(head.next.next);
};
