const Node = function (val = null, pre = null, next = null) {
  this.val = val;
  this.pre = pre;
  this.next = next;
};

/**
 * Linked List Constructor
 */
const MyLinkedList = function () {
  this.length = 0;
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.pre = this.head;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} i
 * @return {number}
 */
MyLinkedList.prototype.get = function (i) {
  if (i < 0 || i >= this.length) return -1;
  if (i === this.length - 1) {
    return this.tail.pre.val;
  }

  let cur = this.head.next;
  if (i + 1 < this.length - i) {
    while (i--) cur = cur.next;
  } else {
    cur = this.tail.pre;
    i = this.length - 1 - i;
    while (i--) {
      cur = cur.pre;
    }
  }

  return cur.val;
};

/**
 * Add a node of value val before the first element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val);
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  this.addAtIndex(this.length, val);
};

/**
 * Add a node of value val before the i-th node in the linked list.
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (i, val) {
  if (i < 0 || i > this.length) return;

  if (i === this.length) {
    const preNode = this.tail.pre;
    const node = new Node(val, preNode, this.tail);
    this.tail.pre = node;
    preNode.next = node;
    this.length++;
    return;
  }

  // same function to find the node in deleteIndex
  let cur = this.head;
  if (i + 1 < this.length - i) {
    while (i--) cur = cur.next;
  } else {
    cur = this.tail.pre;
    i = this.length - i;
    while (i--) {
      cur = cur.pre;
    }
  }

  const nextNode = cur.next;
  const node = new Node(val, cur, nextNode);
  cur.next = node;
  nextNode.pre = node;

  this.length++;
};

/**
 * Delete the i-th node in the linked list, if the index is valid.
 * @param {number} i
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (i) {
  if (i < 0 || i >= this.length) return;

  if (i === this.length - 1) {
    const pre = this.tail.pre.pre;
    this.tail.pre = pre;
    pre.next = this.tail;
    this.length--;
    return;
  }

  let cur = this.head;
  if (i + 1 < this.length - i) {
    while (i--) cur = cur.next;
  } else {
    cur = this.tail.pre;
    i = this.length - i;
    while (i--) {
      cur = cur.pre;
    }
  }

  const next = cur.next.next;
  cur.next = next;
  next.pre = cur;

  this.length--;
};
