var pathSum = function (root, targetSum) {
  const result = [];
  dfs(root, [], result, targetSum);
  return result;
};

const dfs = (root, values, result, targetSum) => {
  if (!root) return;

  if (!root.left && !root.right && targetSum - root.val === 0) {
    result.push([...values, root.val]);
    return;
  }

  values.push(root.val);
  dfs(root.left, values, result, targetSum - root.val);
  dfs(root.right, values, result, targetSum - root.val);
  values.pop();
};
