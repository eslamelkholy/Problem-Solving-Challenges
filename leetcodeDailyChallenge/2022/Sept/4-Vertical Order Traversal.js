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
 * @return {number[][]}
 */
 var verticalTraversal = function(root) {
    const nodesArr = [];
    let nodesMap = new Map();
    
    const inOrder = (root, x, y) => {
        if(!root) return;

        nodesArr.push([x, y, root.val]);

        inOrder(root.left, x + 1, y - 1);
        inOrder(root.right, x + 1, y + 1);
    }
    inOrder(root, 0, 0);
    nodesArr.sort((a,b) => a[1] - b[1] || a[0] - b[0] || a[2] - b[2]);
    
    for (const [x, y, val] of nodesArr) {
        if (!nodesMap.has(y)) nodesMap.set(y, []);
        nodesMap.get(y).push(val);
    }
    
    return [...nodesMap.values()];
};

