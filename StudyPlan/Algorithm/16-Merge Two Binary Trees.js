/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  const buildTree = (first, second) => {
    if ((first === null) & (second === null)) return first;

    let val = null;
    if (first !== null && second !== null) {
      val = first.val + second.val;
    }
    if (first === null) {
      val = second.val;
    }
    if (second === null) {
      val = first.val;
    }

    const root = new TreeNode(val);
    root.left = buildTree(first && first.left, second && second.left);
    root.right = buildTree(first && first.right, second && second.right);

    return root;
  };

  return buildTree(root1, root2);
};

var mergeTrees = function (root1, root2) {
  const buildTree = (first, second) => {
    if (first === null) return second;
    if (second === null) return first;

    first.val += second.val;
    first.left = buildTree(first.left, second.left);
    first.right = buildTree(first.right, second.right);

    return first;
  };

  return buildTree(root1, root2);
};
