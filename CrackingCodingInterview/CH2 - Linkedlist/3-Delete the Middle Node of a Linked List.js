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
  let size = 0;
  let node = head;

  while (node) {
    size++;
    node = node.next;
  }

  let middleNum = Math.floor(size / 2);
  node = new ListNode(0, head);
  let prev = node;

  while (middleNum > 0) {
    middleNum--;
    node = node.next;
  }
  node.next = node.next.next;

  return prev.next;
};
