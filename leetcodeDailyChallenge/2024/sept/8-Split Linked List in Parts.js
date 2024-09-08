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
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let N = 0;
  let node = head;
  const result = [];

  while (node) {
    N++;
    node = node.next;
  }

  const pairsLength = Math.floor(N / k);
  let remainParts = N % k;
  node = head;

  for (let i = 0; i < k; i++) {
    let currentNode = new ListNode(0);
    const prev = currentNode;

    let currentSize = pairsLength;
    if (remainParts > 0) {
      remainParts--;
      currentSize++;
    }

    for (let j = 0; j < currentSize; j++) {
      if (node === null) break;
      currentNode.next = new ListNode(node.val);
      currentNode = currentNode.next;

      node = node.next;
    }

    result.push(prev.next);
  }

  return result;
};
