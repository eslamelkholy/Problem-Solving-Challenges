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
  let number = "";
  while (head) {
    number += head.val;
    head = head.next;
  }
  for (let i = 0; i < number.length; i++) if (number[i] !== number[number.length - 1 - i]) return false;
  return true;
};

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
  //     two pointers, slow & fast
  //   fast goes next.next, slow goes next
  //   when fast === null, slow is halfway
  //   reverse list from slow -> null
  //   compare each element in original list and reversed list

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
