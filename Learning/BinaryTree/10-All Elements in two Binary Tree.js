var getAllElements = function (root1, root2) {
  const results = [];
  const traverseTree = (root) => {
    if (!root) return;

    results.push(root.val);

    traverseTree(root.left);
    traverseTree(root.right);
  };

  traverseTree(root1);
  traverseTree(root2);
  return results.sort((a, b) => a - b);
};
