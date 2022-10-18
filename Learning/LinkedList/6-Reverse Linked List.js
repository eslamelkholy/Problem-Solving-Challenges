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
  let currentNode = head;
  let prevNode = null;

  while (currentNode) {
    const nextNode = currentNode.next;

    currentNode.next = prevNode;

    prevNode = currentNode;

    currentNode = nextNode;
  }

  return prevNode;
};
