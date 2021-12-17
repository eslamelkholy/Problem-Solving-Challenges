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
  let num1 = '';
  let num2 = '';
  while (l1) {
    num1 += l1.val;
    l1 = l1.next;
  }

  while (l2) {
    num2 += l2.val;
    l2 = l2.next;
  }
  const sumNumbers = BigInt([...num1].reverse().join('')) + BigInt([...num2].reverse().join('')) + '';
  let listNodeResult;

  for (const num of sumNumbers) {
    const newNode = new ListNode(num, listNodeResult);
    listNodeResult = newNode;
  }
  return listNodeResult;
};
