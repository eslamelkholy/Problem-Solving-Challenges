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
  const nodes = [];
  let result, start;
  while (head) {
    nodes.push(head.val);
    head = head.next;
  }
  for (let i = 0; i < nodes.length; i++) {
    if (i === nodes.length - n) continue;
    if (result) {
      result.next = new ListNode(nodes[i]);
      result = result.next;
    } else {
      result = new ListNode(nodes[i]);
      start = result;
    }
  }
  return start || head;
};
