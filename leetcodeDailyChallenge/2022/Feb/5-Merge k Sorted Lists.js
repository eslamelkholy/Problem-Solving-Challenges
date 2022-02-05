/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const numsResult = [];
  for (let list of lists) {
    while (list) {
      numsResult.push(list.val);
      list = list.next;
    }
  }
  numsResult.sort((a, b) => a - b);

  let listNode = null;
  for (let i = numsResult.length - 1; i >= 0; i--) {
    const node = new ListNode(numsResult[i], listNode);
    listNode = node;
  }
  return listNode;
};
