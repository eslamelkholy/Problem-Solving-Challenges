class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
class MyCircularQueue {
  constructor(k) {
    this.maxSize = k;
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
  enQueue(val) {
    if (this.isFull()) return false;
    const newNode = new ListNode(val);
    if (this.isEmpty()) this.head = this.tail = newNode;
    else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.size++;
    return true;
  }
  deQueue() {
    if (this.isEmpty()) return false;
    this.head = this.head.next;
    this.size--;
    return true;
  }
  Front() {
    return this.isEmpty() ? -1 : this.head.val;
  }
  Rear() {
    return this.isEmpty() ? -1 : this.tail.val;
  }
  isEmpty() {
    return this.size === 0;
  }
  isFull() {
    return this.size === this.maxSize;
  }
}

var obj = new MyCircularQueue(3);
console.log(obj.enQueue(1));
console.log(obj.enQueue(2));
console.log(obj.enQueue(3));
console.log(obj.enQueue(4));
console.log(obj.Rear());
console.log(obj.isFull());
console.log(obj.deQueue());
console.log(obj.enQueue(4));
console.log(obj.Rear());
console.log(obj.queue);
