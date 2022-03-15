/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var minDiffInBST = function (root, a = 9, b = 25) {
  let minDiff = 0;

  // Takes LCA
  const sumDistance = (root, distance) => {
    if (!root) return;

    distance += 1;
    if (root.val === a || root.val === b) {
      minDiff += distance;
    }

    sumDistance(root.left, distance);
    sumDistance(root.right, distance);
  };
  const dfs = (root) => {
    if (!root) return;

    if (a > root.val && b > root.val) {
      return dfs(root.right);
    }

    if (a < root.val && b < root.val) {
      return dfs(root.left);
    }
    sumDistance(root.left, 0);
    sumDistance(root.right, 0);
  };

  dfs(root);

  return minDiff;
};

var minDiffInBST = function (root, a = 3, b = 9) {
  let minDiff = 0;

  // Takes LCA
  const sumDistance = (root, distance) => {
    if (!root) return;

    distance += 1;
    if (root.val === a || root.val === b) {
      minDiff += distance;
    }

    sumDistance(root.left, distance);
    sumDistance(root.right, distance);
  };
  const dfs = (root) => {
    if (!root) return;

    if (a > root.val && b > root.val) {
      return dfs(root.right);
    }

    if (a < root.val && b < root.val) {
      return dfs(root.left);
    }
    sumDistance(root.left, 0);
    sumDistance(root.right, 0);
  };

  dfs(root);

  return minDiff;
};

// Use this Data Samples for test
// https://leetcode.com/problems/minimum-distance-between-bst-nodes/

// Solution but badass https://www.geeksforgeeks.org/shortest-distance-between-two-nodes-in-bst/
// [5,2,12,1,3,9,21,null,null, null,null,null,null, 19,25]
