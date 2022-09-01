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
 var goodNodes = function(root) {
    let goodNodesCounter = 0;
    
    const inorder = (root, prev) => {
        if(!root) return;
        
        if(root.val >= prev) {
            goodNodesCounter++;
            prev = root.val;
        }
        
        inorder(root.left, prev);
        inorder(root.right, prev);
    }
    
    inorder(root, root.val);
    return goodNodesCounter;
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
 * @return {number}
 */
 var goodNodes = function(root) {
    let goodNodesCounter = 0;
    
    const inorder = (root, prev) => {
        if(!root) return;
        
        if(root.val >= prev) {
            goodNodesCounter++;
            prev = root.val;
        }
        
        inorder(root.left, prev);
        inorder(root.right, prev);
        return goodNodesCounter;
        
    }
    return inorder(root, root.val);
};