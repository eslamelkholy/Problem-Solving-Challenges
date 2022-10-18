/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let length = 0;
  let currTemp = head;

  while (currTemp) {
    length++;
    currTemp = currTemp.next;
  }
  if (n === length) return head.next;

  const nodeToRemoveIndex = length - n - 1; // 5 - 2 - 1 = 2
  let currentNode = head;
  for (let i = 0; i < nodeToRemoveIndex; i++) {
    currentNode = currentNode.next;
  }

  currentNode.next = currentNode.next.next;
  return head;
};
