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
  let currentNode = head;
  let prev = sentinel;

  while (currentNode) {
    if (currentNode.val === val) {
      prev.next = currentNode.next;
    } else {
      prev = currentNode;
    }
    currentNode = currentNode.next;
  }
  return sentinel.next;
};
