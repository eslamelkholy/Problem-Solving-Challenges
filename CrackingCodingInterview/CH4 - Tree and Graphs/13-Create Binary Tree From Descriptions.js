/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
  const treeMap = {};
  const childs = new Set();
  let rootVal = null;

  for (const [parent, child, isLeft] of descriptions) {
    if (treeMap[parent] === undefined) treeMap[parent] = { left: null, right: null };
    if (treeMap[child] === undefined) treeMap[child] = { left: null, right: null };
    childs.add(child);

    isLeft === 1 ? (treeMap[parent].left = child) : (treeMap[parent].right = child);
  }

  for (const desc of descriptions) {
    if (!childs.has(desc[0])) {
      rootVal = desc[0];
      break;
    }
  }

  const construct = (currentRootVal) => {
    if (!currentRootVal) return null;
    const root = new TreeNode(currentRootVal);
    const { left, right } = treeMap[currentRootVal];

    root.left = construct(left);
    root.right = construct(right);

    return root;
  };

  return construct(rootVal);
};
