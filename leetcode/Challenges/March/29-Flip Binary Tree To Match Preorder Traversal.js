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
 * @param {number[]} voyage
 * @return {number[]}
 */
const flipMatchVoyage = function (root, V) {
  let ans = [];
  let visited = 0;
  const walk = (node) => {
    if (!node || ans[0] === -1) return;
    if (node.val !== V[visited++]) ans = [-1];
    // Compare Current Tree Within Voyage
    else if (node.left && node.left.val !== V[visited]) {
      ans.push(node.val);
      walk(node.right);
      walk(node.left);
    } else {
      walk(node.left);
      walk(node.right);
    }
  };
  walk(root);
  return ans;
};
