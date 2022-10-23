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
  let preHead = new ListNode(0);
  let previous = preHead;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      previous.next = list1;
      list1 = list1.next;
    } else {
      previous.next = list2;
      list2 = list2.next;
    }

    previous = previous.next;
  }

  previous.next = list1 === null ? list2 : list1;

  return preHead.next;
};
