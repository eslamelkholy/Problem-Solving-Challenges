/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (!root) return null;
  let first = null;
  let last = null;

  const traverse = (root) => {
    if (!root) return;

    traverse(root.left);

    if (last) {
      last.right = root;
      root.left = last;
    } else {
      first = root;
    }
    last = root;

    traverse(root.right);
  };

  traverse(root);

  last.right = first;
  first.left = last;
  return first;
};
