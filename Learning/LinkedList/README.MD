# Linked List

#### Remove Linked List Elements

https://leetcode.com/problems/remove-linked-list-elements/

```javascript
var removeElements = function (head, val) {
  let startedLinkedList = new ListNode(0, head);
  let prev = startedLinkedList;
  let curr = head;

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return startedLinkedList.next;
};
```
