// https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/928/
var preorderTraversal = function (root) {
  const result = [];
  const traverse = (root) => {
    if (!root) return;
    result.push(root.val);
    traverse(root.left);
    traverse(root.right);
  };
  traverse(root);
  return result;
};
