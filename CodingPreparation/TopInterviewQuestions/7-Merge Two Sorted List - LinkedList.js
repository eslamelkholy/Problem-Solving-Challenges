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
  let dummyLinkedList = new ListNode();
  const listNodeResult = dummyLinkedList;

  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      dummyLinkedList.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      dummyLinkedList.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    dummyLinkedList = dummyLinkedList.next;
  }

  dummyLinkedList.next = list1 != null ? list1 : list2;
  return listNodeResult.next;
};
