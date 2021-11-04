var sumNumbers = function (root) {
  let sum = 0;
  const dfs = (root, previousVal) => {
    if (!root) return 0;

    if (!root.left && !root.right) sum += parseInt(previousVal + root.val + '');

    dfs(root.left, previousVal + root.val + '');
    dfs(root.right, previousVal + root.val + '');
  };
  dfs(root, sum);
  return sum;
};
