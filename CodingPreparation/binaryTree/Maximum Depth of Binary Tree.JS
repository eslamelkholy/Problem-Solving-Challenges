var maxDepth = function (root) {
  if (!root) return root;
  let maxDepth = 0;
  let treeRunner = (node, depth) => {
    if (!node) return;
    if (depth > maxDepth) maxDepth = depth;
    treeRunner(node.right, depth + 1);
    treeRunner(node.left, depth + 1);
  };
  treeRunner(root, 1);
  return maxDepth;
};
