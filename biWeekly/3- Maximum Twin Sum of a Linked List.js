/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */ var pairSum = function (head) {
  const nodeValues = [];
  let maxVal = 0;
  while (head) {
    nodeValues.push(head.val);
    head = head.next;
  }
  const n = nodeValues.length;

  for (let i = 0; i <= n / 2 - 1; i++) {
    const twins = nodeValues[i] + nodeValues[n - 1 - i];
    if (twins > maxVal) {
      maxVal = twins;
    }
  }
  return maxVal;
};
/**
 * @param {ListNode} head
 * @return {number}
 */
