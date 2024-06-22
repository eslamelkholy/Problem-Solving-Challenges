/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let set = new Set();

  while (head) {
    if (set.has(head)) return true;

    set.add(head);
    head = head.next;
  }

  return false;
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    if (slow === fast) return true;

    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};
