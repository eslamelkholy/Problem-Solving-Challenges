/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  const result = [];
  const post = (root) => {
    if (!root) return;

    for (const child of root.children) {
      post(child);
    }

    result.push(root.val);
  };
  post(root);

  return result;
};
