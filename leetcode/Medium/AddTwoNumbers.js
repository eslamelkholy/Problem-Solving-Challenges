/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Example1
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Solution1: Without Using Data Structure
// var addTwoNumbers = function (l1, l2) {
//   return reverseArray((reverseArray(l1) + reverseArray(l2)).toString())
//     .toString()
//     .split('')
//     .map((num) => Number(num));
// };

// const reverseArray = (arr) => {
//   let result = '';
//   for (let i = arr.length - 1; i >= 0; i--) result += arr[i];
//   return parseInt(result);
// };

// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
// console.log(reverseArray([2, 4, 3]));

// Solution2: Using Linkedlist Data structure

// Test Case1
// const node1 = new listNode(3);
// const node2 = new listNode(4, node1);
// const node3 = new listNode(2, node2);

// const node4 = new listNode(4);
// const node5 = new listNode(6, node4);
// const node6 = new listNode(5, node5);

// Test Cases2
// [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// [5,6,4]
function listNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const createLinkedList = (arrOfNumbers) => {
  let list = undefined;
  for (let i = 0; i < arrOfNumbers.length; i++) {
    const newNode = new listNode(arrOfNumbers[i], list);
    list = newNode;
  }
  return list;
};

const list1 = createLinkedList([
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
]);
const list2 = createLinkedList([5, 6, 4]);

console.log(list1);
console.log(list2);

var addTwoNumbers = function (l1, l2) {
  const summutationResult = (getReversedLinkedListValue(l1) + getReversedLinkedListValue(l2)).toString();

  console.log(summutationResult);
  let list = undefined;
  for (let i = 0; i < summutationResult.length; i++) {
    const newNode = new listNode(summutationResult[i], list);
    list = newNode;
  }
  return list;
};

const getReversedLinkedListValue = (list) => {
  let reversedVal = '';
  while (list) {
    reversedVal = list.val + reversedVal;
    list = list.next;
  }
  console.log(reversedVal);
  return BigInt(reversedVal);
};

console.log(addTwoNumbers(list1, list2));
