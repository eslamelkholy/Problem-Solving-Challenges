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
  if (fast !== null) {
    slow = slow.next;
  }

  slow = reverseLinkedlist(slow);
  fast = head;

  while (slow) {
    if (slow.val !== fast.val) {
      return false;
    }

    slow = slow.next;
    fast = fast.next;
  }

  return true;
};

const reverseLinkedlist = (head) => {
  let currentNode = head;
  let prev = null;

  while (currentNode) {
    const nextNode = currentNode.next;

    currentNode.next = prev;
    prev = currentNode;

    currentNode = nextNode;
  }

  return prev;
};
