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
var countUnivalSubtrees = function (root) {
  let count = 0;

  const findUnival = (root) => {
    if (!root) return true;

    const left = findUnival(root.left);
    const right = findUnival(root.right);

    if (left && right) {
      if (root.left && root.left.val !== root.val) return false;
      if (root.right && root.right.val !== root.val) return false;

      count++;
      return true;
    }

    return false;
  };
  findUnival(root);

  return count;
};
