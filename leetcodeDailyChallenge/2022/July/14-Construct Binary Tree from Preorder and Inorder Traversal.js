/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const nodeMap = {};
    const leftPointer = 0;
    const rightPointer = inorder.length - 1;
    
    inorder.forEach((val, index) => nodeMap[val] = index);
    
    const construct = (start, end) => {
        if(start > end) return null;
        
        const nodeVal = preorder.shift();
        const nodeIndex = nodeMap[nodeVal];
        
        const tree = new TreeNode(nodeVal);
        
        tree.left = construct(start, nodeIndex - 1);
        tree.right = construct(nodeIndex + 1, end);
        
        return tree;
    }
    
    return construct(leftPointer, rightPointer);
};
