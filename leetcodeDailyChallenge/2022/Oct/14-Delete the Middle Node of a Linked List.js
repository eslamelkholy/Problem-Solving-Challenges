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
var deleteMiddle = function (head) {
  let node1 = head;
  let node2 = head;
  let count = 0;

  if (head.next === null) return head.next;

  while (node1) {
    count++;

    node1 = node1.next;
  }
  count = Math.floor(count / 2);

  for (let i = 0; i < count - 1; i++) {
    node2 = node2.next;
  }
  node2.next = node2.next.next;

  return head;
};
