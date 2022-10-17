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
  let faster = head.next;

  while (faster && faster.next) {
    if (faster === slow) return true;
    faster = faster.next.next;
    slow = slow.next;
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
  let faster = head.next;

  while (faster !== slow) {
    if (faster === null || faster.next === null) return false;

    faster = faster.next.next;
    slow = slow.next;
  }

  return true;
};
