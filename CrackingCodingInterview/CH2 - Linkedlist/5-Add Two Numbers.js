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
  let carry = 0;
  let head = new ListNode(0);
  let prev = head;

  // So keep track of both lists and the carry
  while (l1 || l2 || carry !== 0) {
    let sum1 = l1 ? l1.val : 0;
    let sum2 = l2 ? l2.val : 0;
    const totalSum = sum1 + sum2 + carry;

    carry = Math.floor(totalSum / 10); // to get the rest

    const val = totalSum % 10; // Get second digit of number

    head.next = new ListNode(val);
    head = head.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return prev.next;
};
