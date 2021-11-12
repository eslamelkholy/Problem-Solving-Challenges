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
  if (!head) return head;
  let dummyLinkedList = head;
  let clonedLinkedList = dummyLinkedList;

  while (head) {
    if (head.next && head.next.val === val) head.next = head.next.next;

    head = head.next;
    if (!head || head.val !== val) {
      dummyLinkedList.next = head;
      dummyLinkedList = dummyLinkedList.next;
    }
  }
  if (clonedLinkedList.val === val) clonedLinkedList = clonedLinkedList.next;

  return clonedLinkedList;
};
