class Node {
  constructor(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null;
  const queue = [root];
  while (queue.length > 0) {
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      let node = queue.shift();
      node.next = i === n - 1 ? null : queue[0];

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return root;
};

console.log(connect([1, 2, 3, 4, 5, 6, 7]));
