var levelOrderBFS = function (root) {
  if (!root) return [];
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    const levelValues = [];
    const n = queue.length; // Save Queue Length  HERE
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      levelValues.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(levelValues);
  }

  return result;
};
