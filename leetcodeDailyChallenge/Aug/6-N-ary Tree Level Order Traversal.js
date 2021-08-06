var levelOrder = function (root) {
  if (!root) return [];
  const result = [[root.val]];
  let level = 1;
  const dfs = (root, level) => {
    if (root.children.length === 0) return;
    const childrenValues = [];
    for (let i = 0; i < root.children.length; i++) {
      childrenValues.push(root.children[i].val);
      dfs(root.children[i], level + 1);
    }
    result[level] = result[level] ? [...result[level], ...childrenValues] : [...childrenValues];
  };
  dfs(root, level);
  return result;
};
