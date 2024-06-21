/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  slow = reverse(slow);
  fast = head;

  while (fast && slow) {
    if (fast.val !== slow.val) return false;

    fast = fast.next;
    slow = slow.next;
  }

  return true;
};

const reverse = (head) => {
  let current = head;
  let prev = null;

  while (current) {
    const nextNode = current.next;

    current.next = prev;
    prev = current;

    current = nextNode;
  }

  return prev;
};
