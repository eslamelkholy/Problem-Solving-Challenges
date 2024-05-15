class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.size = 0;
    this.head = new ListNode(0);
  }
  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (index < 0 || index >= this.size) return -1;
    let head = this.head;
    for (let i = 0; i <= index; i++) {
      head = head.next;
    }
    return head.val;
  }
  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    this.addAtIndex(0, val);
  }
  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    this.addAtIndex(this.size, val);
  }
  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    if (index > this.size) return;
    const node = new ListNode(val);
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    node.next = temp.next;
    temp.next = node;
    this.size++;
  }
  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return -1;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    temp.next = temp.next.next;
    this.size--;
  }
}

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2); // linked list becomes 1->2->3
console.log(myLinkedList.get(1)); // return 2
myLinkedList.deleteAtIndex(1); // now the linked list is 1->3
console.log(myLinkedList.get(1)); // return 3
