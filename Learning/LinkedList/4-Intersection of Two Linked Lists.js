/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  while (headA) {
    let temp = headB;
    while (temp) {
      if (temp === headA) {
        return temp;
      }

      temp = temp.next;
    }

    headA = headA.next;
  }
  return null;
};
