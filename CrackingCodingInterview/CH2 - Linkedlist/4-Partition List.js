/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let leftHead = new ListNode(0);
  let left = leftHead;
  let rightHead = new ListNode(0);
  let right = rightHead;

  while (head) {
    if (head.val >= x) {
      rightHead.next = new ListNode(head.val);
      rightHead = rightHead.next;
    } else {
      leftHead.next = new ListNode(head.val);
      leftHead = leftHead.next;
    }
    head = head.next;
  }

  leftHead.next = right.next;
  return left.next;
};
