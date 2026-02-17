const hasCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return slow;
  }

  return null;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const currentStart = hasCycle(head);
  if (!currentStart) return null;

  let pointer1 = head;
  let pointer2 = currentStart;

  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer1;
};
