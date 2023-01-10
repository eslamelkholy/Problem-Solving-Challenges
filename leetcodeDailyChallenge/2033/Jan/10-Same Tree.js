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

  while (qStack.length > 0) {
    const currQ = qStack.pop();
    const currP = pStack.pop();

    if (!currQ && !currP) continue;

    if (!currQ || !currP) return false; // check if one exist and other Not

    if (currQ.val !== currP.val) return false;

    pStack.push(currP.left);
    qStack.push(currQ.left);
    pStack.push(currP.right);
    qStack.push(currQ.right);
  }

  return true;
};
