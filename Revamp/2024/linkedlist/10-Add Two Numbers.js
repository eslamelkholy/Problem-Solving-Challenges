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
  let arr1 = [];
  let arr2 = [];
  while (l1) {
    arr1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    arr2.push(l2.val);
    l2 = l2.next;
  }

  const sum = BigInt(arr1.reverse().join("")) + BigInt(arr2.reverse().join("")) + "";

  let head;
  for (const num of sum) {
    const newNode = new ListNode(num, head);
    head = newNode;
  }

  return head;
};
