/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
  const newNode = new Node(insertVal);
  if (!head) {
    // Emppty Conition
    newNode.next = newNode;
    return newNode;
  }

  let curr = head;
  let next = head.next;

  while (next != head) {
    const condition1 = insertVal >= curr.val && insertVal <= next.val;
    const condition2 = insertVal <= curr.val && insertVal <= next.val && next.val < curr.val;
    const condition3 = insertVal >= curr.val && next.val < curr.val;

    if (condition1 || condition2 || condition3) {
      curr.next = newNode;
      newNode.next = next;
      return head;
    }

    curr = next;
    next = next.next;
  }
  curr.next = newNode;
  newNode.next = head;
  return head;
};
