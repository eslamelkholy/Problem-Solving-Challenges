/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let list1 = [];
  let list2 = [];
  let result = new ListNode(0);
  let prev = result;

  while (l1) {
    list1.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    list2.push(l2.val);
    l2 = l2.next;
  }

  const newNodeVal = BigInt(list1.reverse().join("")) + BigInt(list2.reverse().join("")) + "";
  for (let i = newNodeVal.length - 1; i >= 0; i--) {
    result.next = new ListNode(newNodeVal[i]);
    result = result.next;
  }

  return prev.next;
};
