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
  let node = head;

  while (node && node.next) {
    const temp = node.val;
    const nextNode = node.next.next;

    node.val = node.next.val;
    node.next.val = temp;

    node = nextNode;
  }

  return head;
};
