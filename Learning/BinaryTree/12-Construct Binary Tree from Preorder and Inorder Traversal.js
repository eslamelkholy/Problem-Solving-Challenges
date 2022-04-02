class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const nodesMap = {};
  const leftPointer = 0;
  const rightPointer = inorder.length - 1;

  inorder.forEach((val, index) => (nodesMap[val] = index));

  const construct = (start, end) => {
    if (start > end) return null;

    const nodeVal = preorder.shift();
    const root = new TreeNode(nodeVal);

    const nodeIndex = nodesMap[nodeVal];

    root.left = construct(start, nodeIndex - 1);
    root.right = construct(nodeIndex + 1, end);

    return root;
  };

  return construct(leftPointer, rightPointer);
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
console.log(buildTree([-1], [-1]));
