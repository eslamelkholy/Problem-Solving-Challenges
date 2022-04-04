/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  const nodesArr = [];
  while (head) {
    nodesArr.push(head.val);
    head = head.next;
  }

  const tempVal = nodesArr[k - 1];
  nodesArr[k - 1] = nodesArr[nodesArr.length - k];
  nodesArr[nodesArr.length - k] = tempVal;

  let swappedList;
  for (let i = nodesArr.length - 1; i >= 0; i--) {
    const newNode = new ListNode(nodesArr[i], swappedList);
    swappedList = newNode;
  }

  return swappedList;
};
