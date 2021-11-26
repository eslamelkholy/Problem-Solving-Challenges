//https://leetcode.com/problems/sum-of-left-leaves/
var sumOfLeftLeaves = function (root) {
  let result = 0;
  const traverse = (root) => {
    if (!root) return;
    if (root.left && !root.left.right && !root.left.left) result += root.left.val;
    traverse(root.left);
    traverse(root.right);
  };

  traverse(root);
  return result;
};
