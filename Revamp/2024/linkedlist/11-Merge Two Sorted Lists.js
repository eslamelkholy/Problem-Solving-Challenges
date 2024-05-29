/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = new ListNode(0);
  let prev = head; // Point to head with first node 0

  while (list1 && list2) {
    if (list1.val < list2.val) {
      head.next = new ListNode(list1.val);
      head = head.next;
      list1 = list1.next;
    } else {
      head.next = new ListNode(list2.val);
      head = head.next;
      list2 = list2.next;
    }
  }

  head.next = list1 || list2;
  return prev.next;
};
