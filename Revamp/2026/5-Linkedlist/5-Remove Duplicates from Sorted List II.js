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
var deleteDuplicates = function (head) {
  let dummyNode = new ListNode(0, head);
  let prev = dummyNode;

  while (head) {
    if (head.next && head.next.val === head.val) {
      while (head.next && head.next.val === head.val) {
        head = head.next;
      }

      prev.next = head.next; // Jump and cut
    } else {
      prev = prev.next;
    }

    head = head.next;
  }

  return dummyNode.next;
};
