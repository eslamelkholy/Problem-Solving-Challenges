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
  const sential = new ListNode(0, head);
  let pred = sential;

  while (head) {
    const haveDuplicated = head.next && head.next.val === head.val;

    if (haveDuplicated) {
      // Start By Pass it to next Pred
      while (head.next && head.next.val === head.val) {
        head = head.next;
      }
      pred.next = head.next;
    } else {
      pred = pred.next;
    }

    head = head.next;
  }

  return sential.next;
};
