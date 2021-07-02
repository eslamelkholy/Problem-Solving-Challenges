/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var partition = function (head, x) {
  let smallerPart, greaterPart, start, end;
  while (head) {
    if (head.val < x) {
      if (smallerPart) {
        smallerPart.next = new ListNode(head.val);
        smallerPart = smallerPart.next;
      } else {
        smallerPart = new ListNode(head.val);
        start = smallerPart;
      }
    } else {
      if (greaterPart) {
        greaterPart.next = new ListNode(head.val);
        greaterPart = greaterPart.next;
      } else {
        greaterPart = new ListNode(head.val);
        end = greaterPart;
      }
    }
    head = head.next;
  }
  if (smallerPart && end) smallerPart.next = end;
  return start || end || head;
};
