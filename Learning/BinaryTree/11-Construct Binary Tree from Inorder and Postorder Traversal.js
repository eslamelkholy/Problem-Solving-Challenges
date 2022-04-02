function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let NodesMap = {};
  let startPointer = 0;
  let endPointer = inorder.length - 1;

  inorder.forEach((v, i) => (NodesMap[v] = i));

  const construct = (start, end) => {
    if (start > end) return null;

    const rootVal = postorder.pop();
    const root = new TreeNode(rootVal);
    const index = NodesMap[rootVal];

    root.right = construct(index + 1, end);
    root.left = construct(start, index - 1);

    return root;
  };

  return construct(startPointer, endPointer);
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
console.log(buildTree([-1], [-1]));
