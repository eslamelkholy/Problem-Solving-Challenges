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
var deleteDuplicates = function (head) {
  node = new ListNode(0, head);
  prev = node;
  tobeClean = node;
  const clean = new Set();

  while (node) {
    let nextVal = node.next?.val; // 1
    while (node.next && node.next.next) {
      if (node.next.next.val !== nextVal) {
        break;
      }
      clean.add(nextVal);
      node.next = node.next.next;
      skip = node;
    }

    node = node.next;
  }

  while (tobeClean && tobeClean.next) {
    if (clean.has(tobeClean.next.val)) {
      tobeClean.next = tobeClean.next.next;
      continue;
    }

    tobeClean = tobeClean.next;
  }

  return prev.next;
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const numSet = new Set();
  const toBeRemoved = new Set();
  let node = head;

  while (node) {
    if (numSet.has(node.val)) toBeRemoved.add(node.val);

    numSet.add(node.val);
    node = node.next;
  }

  node = new ListNode(0, head);
  prev = node;

  while (node && node.next) {
    while (toBeRemoved.has(node.next?.val)) {
      node.next = node.next.next;
    }

    node = node.next;
  }

  return prev.next;
};
