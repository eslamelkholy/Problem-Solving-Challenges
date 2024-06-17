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
var deleteDuplicatesUnsorted = function (head) {
  const map = {};
  let node = head;
  while (node) {
    map[node.val]++ || (map[node.val] = 1);
    node = node.next;
  }

  node = new ListNode(0, head);
  let prev = node;

  while (node && node.next) {
    if (map[node.next.val] > 1) {
      node.next = node.next.next;
      continue;
    }

    node = node.next;
  }
  return prev.next;
};
