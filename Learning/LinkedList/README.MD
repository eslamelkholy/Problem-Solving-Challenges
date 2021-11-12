# Linked List

#### Remove Linked List Elements

https://leetcode.com/problems/remove-linked-list-elements/

```javascript
var removeElements = function (head, val) {
  if (!head) return head;
  let dummyLinkedList = head;
  let clonedLinkedList = dummyLinkedList;

  while (head) {
    if (head.next && head.next.val === val) head.next = head.next.next;

    head = head.next;
    if (!head || head.val !== val) {
      dummyLinkedList.next = head;
      dummyLinkedList = dummyLinkedList.next;
    }
  }
  if (clonedLinkedList.val === val) clonedLinkedList = clonedLinkedList.next;

  return clonedLinkedList;
};
```
