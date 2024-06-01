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
var flatten = function (root) {
  const convert = (root) => {
    if (!root) return root;

    if (!root.left && !root.right) return root;

    const leftTail = convert(root.left);
    const rightTail = convert(root.right);

    if (leftTail !== null) {
      leftTail.right = root.right;
      root.right = root.left;
      root.left = null;
    }

    return rightTail === null ? leftTail : rightTail;
  };

  return convert(root);
};
