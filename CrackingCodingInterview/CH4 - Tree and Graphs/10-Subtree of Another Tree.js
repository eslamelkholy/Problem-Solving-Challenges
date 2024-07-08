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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  let result = false;

  const isSame = (root, currentSub) => {
    if (!root && !currentSub) return true;

    if (!root || !currentSub) return false;

    if (root.val !== currentSub.val) return false;

    return isSame(root.left, currentSub.left) && isSame(root.right, currentSub.right);
  };

  const dfs = (root) => {
    if (!root) return;

    if (root.val === subRoot.val) {
      if (isSame(root, subRoot)) {
        return (result = true);
      }
    }

    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);

  return result;
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
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  let arr1 = [];
  let arr2 = [];

  const dfs = (root, arr) => {
    if (!root) {
      return arr.push("#");
    }

    arr.push("X" + root.val);

    dfs(root.left, arr);
    dfs(root.right, arr);
  };
  dfs(root, arr1);
  dfs(subRoot, arr2);

  const s1 = arr1.join(",");
  const s2 = arr2.join(",");

  return s1.indexOf(s2) !== -1;
};
