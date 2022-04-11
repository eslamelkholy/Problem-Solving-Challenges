/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  const linkedListValues = [];
  let resultList;
  while (head) {
    linkedListValues.push(head.val);
    head = head.next;
  }

  for (
    let i = linkedListValues.length - 1;
    i >= Math.floor(linkedListValues.length / 2);
    i--
  ) {
    const node = new ListNode(linkedListValues[i], resultList);
    resultList = node;
  }

  return resultList;
};
