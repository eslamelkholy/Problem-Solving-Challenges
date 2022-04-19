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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let pre = new TreeNode(Number.MIN_SAFE_INTEGER);
  let firstMistake = null,
    secondMistake = null;

  const inorder = (root) => {
    if (!root) return root;

    inorder(root.left);

    if (firstMistake === null && root.val < pre.val) {
      firstMistake = pre;
    }
    if (firstMistake !== null && root.val < pre.val) {
      secondMistake = root;
    }

    pre = root;
    inorder(root.right);
  };

  inorder(root);
  [secondMistake.val, firstMistake.val] = [firstMistake.val, secondMistake.val];
};
