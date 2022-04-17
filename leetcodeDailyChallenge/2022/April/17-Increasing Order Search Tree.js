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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  const values = [];
  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    values.push(root.val);
    dfs(root.right);
  };
  const construct = () => {
    if (values.length === 0) return null;
    const value = values.shift();
    const root = new TreeNode(value);

    root.right = construct();

    return root;
  };
  dfs(root);
  return construct();
};

var increasingBST = function (root) {
  let head = new TreeNode();
  let current = head;

  const inorder = (node) => {
    if (!node) return;

    inorder(node.left);

    current.right = new TreeNode(node.val);
    current = current.right;

    inorder(node.right);
  };

  inorder(root);
  return head.right;
};
