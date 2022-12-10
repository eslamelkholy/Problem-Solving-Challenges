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
var maxProduct = function (root) {
  const allSums = [];
  let maxProduct = 0;

  const sumTree = (root) => {
    if (!root) return 0;

    const leftSum = sumTree(root.left);
    const rightSum = sumTree(root.right);
    const subTreeTotalSum = root.val + leftSum + rightSum;

    allSums.push(subTreeTotalSum);
    return subTreeTotalSum;
  };

  const totalSum = sumTree(root);

  for (const subtreeSum of allSums) {
    maxProduct = Math.max(maxProduct, subtreeSum * (totalSum - subtreeSum));
  }

  return maxProduct % 1000000007;
};

//If we know the sum of a subtree, the answer is max( (total_sum - subtree_sum) * subtree_sum) in each node.
