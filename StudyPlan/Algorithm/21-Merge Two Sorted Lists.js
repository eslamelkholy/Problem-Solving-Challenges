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
  let dummyLinkedlist = new ListNode();
  const listNodeResult = dummyLinkedlist;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      dummyLinkedlist.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      dummyLinkedlist.next = new ListNode(list2.val);
      list2 = list2.next;
    }

    dummyLinkedlist = dummyLinkedlist.next;
  }
  dummyLinkedlist.next = list1 != null ? list1 : list2;
  return listNodeResult.next;
};
