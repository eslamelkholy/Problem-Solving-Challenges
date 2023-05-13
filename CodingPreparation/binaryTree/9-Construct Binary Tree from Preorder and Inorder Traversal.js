/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const inorderMap = {};

  for (let i = 0; i < inorder.length; i++) {
    inorderMap[inorder[i]] = i;
  }

  const arrayToBinaryTree = (left, right) => {
    if (left > right) return null;

    const rootVal = preorder.shift();

    const root = new TreeNode(rootVal);

    const nodeIndex = inorderMap[rootVal];

    root.left = arrayToBinaryTree(left, nodeIndex - 1);
    root.right = arrayToBinaryTree(nodeIndex + 1, right);

    return root;
  };

  return arrayToBinaryTree(0, inorder.length - 1);
};
