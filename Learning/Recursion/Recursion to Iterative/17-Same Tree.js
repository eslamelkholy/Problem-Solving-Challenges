/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;

  if (!p || !q) return false;

  if (p.val !== q.val) return false;

  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const pStack = [p];
  const qStack = [q];

  while (pStack.length > 0) {
    const currP = pStack.pop();
    const currQ = qStack.pop();

    if (!currP && !currQ) {
      continue;
    }

    if (!currP || !currQ) return false;
    if (currP.val !== currQ.val) return false;

    pStack.push(currP.left);
    qStack.push(currQ.left);
    pStack.push(currP.right);
    qStack.push(currQ.right);
  }
  return true;
};
