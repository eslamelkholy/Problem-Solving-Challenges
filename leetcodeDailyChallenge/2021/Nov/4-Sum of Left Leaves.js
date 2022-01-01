var sumOfLeftLeaves = function (root) {
  let sum = 0;
  const traverse = (root) => {
    if (!root) return 0;

    if (root.left && !root.left.left && !root.left.right) sum += root.left.val;

    traverse(root.left);
    traverse(root.right);
  };

  traverse(root);
  return sum;
};
