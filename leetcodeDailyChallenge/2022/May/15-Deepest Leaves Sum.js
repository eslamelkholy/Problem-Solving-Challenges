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
var deepestLeavesSum = function(root) {
    let treeDepth = 1;
    let sum = 0;
    
    const findDepth = (root, currentDepth) => {
        if(!root) return;
        
        treeDepth = Math.max(treeDepth, currentDepth);
        currentDepth++;
        
        findDepth(root.left, currentDepth);
        findDepth(root.right, currentDepth);
    }
    
    const computeSum = (root, currentDepth) => {
        if(!root) return;
        
        if(currentDepth === treeDepth) sum += root.val;
        currentDepth++;
        
        computeSum(root.left, currentDepth);
        computeSum(root.right, currentDepth);
    }
    
    findDepth(root, 1)
    computeSum(root,1);
    
    return sum;
};

// BFS Solution
var deepestLeavesSum = function(root) {
    let sum = 0;
    const queue = [root];
    
    while(queue.length > 0) {
        sum = 0;
        const n = queue.length;
        for(let i = 0; i < n; i++) {
            const currentNode = queue.shift();
            
            sum += currentNode.val;
            
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
    }
    
    return sum;
};
