/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function (root) {
  let moves = 0;

  const dfs = (root) => {
    if (!root) return 0;

    const leftVal = dfs(root.left);
    const rightVal = dfs(root.right);

    moves += Math.abs(leftVal) + Math.abs(rightVal);

    return root.val + leftVal + rightVal - 1;
  };

  dfs(root);

  return moves;
};
