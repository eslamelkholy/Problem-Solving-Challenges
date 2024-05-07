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
var removeNodes = function (head) {
  let curr = head;
  const stack = [];
  while (curr) {
    while (stack.length > 0 && stack[stack.length - 1].val < curr.val) {
      stack.pop();
    }

    stack.push(curr);
    curr = curr.next;
  }
  // Build linkedlist now
  let next = null;
  while (stack.length > 0) {
    curr = stack.pop();
    curr.next = next;

    next = curr;
  }

  return curr;
};
