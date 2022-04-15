var searchBST = function (root, val) {
  let result = null;
  const dfs = (root) => {
    if (!root) return;

    if (root.val === val) {
      result = root;
      return;
    }
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return result;
};
