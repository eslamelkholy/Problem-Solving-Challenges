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
  let prev = null; // This is will become the next head

  while (currentNode) {
    const nextNode = currentNode.next;

    currentNode.next = prev;
    prev = currentNode;

    currentNode = nextNode;
  }

  return prev;
};
