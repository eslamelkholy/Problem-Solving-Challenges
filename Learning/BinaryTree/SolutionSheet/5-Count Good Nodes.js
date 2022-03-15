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
 * @return {number}
 */
var goodNodes = function (root) {
  let goodNodesCounter = 0;

  const dfs = (root, val) => {
    if (!root) return;

    if (root.val >= val) {
      goodNodesCounter++;
    }

    const maxVal = Math.max(root.val, val);
    dfs(root.left, maxVal);
    dfs(root.right, maxVal);
  };

  dfs(root, Number.MIN_SAFE_INTEGER);

  return goodNodesCounter;
};

/**
 * [3,1,4,3,null,1,5]
[-1,5,-2,4,4,2,-2,null,null,-4,null,-2,3,null,-2,0,null,-1,null,-3,null,-4,-3,3,null,null,null,null,null,null,null,3,-3]
 */

// https://leetcode.com/problems/count-good-nodes-in-binary-tree/submissions/
