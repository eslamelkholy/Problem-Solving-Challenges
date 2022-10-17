class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {}
  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    const head = new ListNode(val);
    if (this.head === null) {
      this.head = head;
    } else {
      head.next = this.head;
      this.head = head;
    }
    this.size = this.size + 1;
  }
  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    const tail = new ListNode(val);
    if (this.tail === null) {
      this.tail = tail;
    } else {
      this.tail.next = tail;
      this.tail = tail;
    }

    this.size = this.size + 1;
  }
  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {}
  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {}
}

var obj = new MyLinkedList();
obj.addAtHead(1);
obj.addAtTail(3);
console.log(obj.head);
//    obj.addAtIndex(index,val)
//    obj.deleteAtIndex(index)
