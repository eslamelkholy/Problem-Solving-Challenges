/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const pStack = [p];
  const qStack = [q];

  while (pStack.length > 0 && qStack.length > 0) {
    const pNode = pStack.pop();
    const qNode = qStack.pop();
    if (!pNode && !qNode) {
      continue;
    }

    if (!pNode || !qNode) return false;
    if (pNode.val !== qNode.val) return false;

    pStack.push(pNode.left);
    qStack.push(qNode.left);
    pStack.push(pNode.right);
    qStack.push(qNode.right);
  }

  return true;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const dfs = (root1, root2) => {
    if (!root1 && !root2) return true;

    if (!root1 || !root2) return false;

    if (root1.val !== root2.val) return false;

    return dfs(root1.left, root2.left) && dfs(root1.right, root2.right);
  };

  return dfs(p, q);
};
