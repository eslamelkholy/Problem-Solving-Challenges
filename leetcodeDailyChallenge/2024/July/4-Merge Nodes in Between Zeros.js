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
var mergeNodes = function (head) {
  let sum = 0;
  let node = new ListNode(0);
  let prev = node;

  while (head) {
    sum += head.val;

    if (head.val === 0) {
      node.next = new ListNode(sum);
      node = node.next;
      sum = 0;
    }

    head = head.next;
  }

  return prev.next.next;
};
