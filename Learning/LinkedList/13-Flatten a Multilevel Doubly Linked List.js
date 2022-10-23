/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) return head;
  let preHead = new ListNode(0, null, head, null);
  let current = preHead;
  let prev = preHead;

  const stack = [head];

  while (stack.length > 0) {
    const current = stack.pop();

    prev.next = current;
    current.prev = prev;

    if (current.next) {
      stack.push(current.next);
    }

    if (current.child) {
      stack.push(current.child);
      current.child = null;
    }

    prev = current;
  }

  preHead.next.prev = null;
  return preHead.next;
};
