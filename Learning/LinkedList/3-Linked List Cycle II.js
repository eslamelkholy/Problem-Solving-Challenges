/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const visited = new Set();
  let node = head;

  while (node) {
    if (visited.has(node)) return node;

    visited.add(node);
    node = node.next;
  }

  return null;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const isCycleExists = (head) => {
  let slow = head;
  let faster = head;

  while (faster && faster.next) {
    slow = slow.next;
    faster = faster.next.next;

    if (faster === slow) return slow;
  }

  return null;
};

var detectCycle = function (head) {
  if (!head) return head;

  const cycleIntersect = isCycleExists(head);
  if (cycleIntersect === null) return null;

  let pointer1 = head;
  let pointer2 = cycleIntersect;

  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer1;
};
