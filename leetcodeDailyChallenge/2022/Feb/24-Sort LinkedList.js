var sortList = function (head) {
  if (!head) return head;
  const values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  values.sort((a, b) => a - b);
  let list = undefined;
  for (let i = values.length - 1; i >= 0; i--) {
    list = new ListNode(values[i], list);
  }
  return list;
};
