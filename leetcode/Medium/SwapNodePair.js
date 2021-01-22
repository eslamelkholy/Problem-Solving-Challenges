/**
 * @param {ListNode} head
 * @return {ListNode}
 * @license https://leetcode.com/problems/swap-nodes-in-pairs/
 */

function listNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const createLinkedList = (arrOfNumbers) => {
  let list = undefined;
  for (let i = arrOfNumbers.length - 1; i >= 0; i--) {
    const newNode = new listNode(arrOfNumbers[i], list);
    list = newNode;
  }
  return list;
};

const list1 = createLinkedList([1, 2, 3, 4]);
const list2 = createLinkedList([1]);
const list3 = createLinkedList([1, 2, 3]);

var swapPairs = function (head) {
  let list = new listNode(0);
  list.next = head;
  let current = list;
  while (current.next && current.next.next) {
    swap(current);
    current = current.next.next;
  }
  return list.next;
};

const swap = (previous) => {
  list = previous.next;
  previous.next = list.next;
  list.next = list.next.next;
  previous.next.next = list;
};

// console.log(swapPairs(list1));
// console.log(swapPairs(list2));
// console.log(swapPairs(list3));
// console.log(swapPairs([]));
console.log(swapPairs(createLinkedList([1, 2, 3, 4, 5])));
console.log(swapPairs(createLinkedList([2, 5, 3, 4, 6, 2, 2])));
