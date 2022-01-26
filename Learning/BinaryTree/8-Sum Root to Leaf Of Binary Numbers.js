var sumRootToLeaf = function (root) {
  let sum = 0;
  const dfs = (root, prev = '') => {
    if (!root) return;
    prev += root.val;

    if (!root.left && !root.right) {
      sum += parseInt(prev, 2);
    }

    dfs(root.left, prev);
    dfs(root.right, prev);
  };
  dfs(root);
  return sum;
};
