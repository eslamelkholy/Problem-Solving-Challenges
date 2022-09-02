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
 * @return {number[]}
 */
 var averageOfLevels = function(root) {
    const queue = [root];
    const levelsAvg = [];
    
    while(queue.length > 0) {
        const n = queue.length;
        let sumValues = 0;
        
        for(let i = 0; i < n; i++) {
            const currentNode = queue.shift();
            sumValues += currentNode.val;
            
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
        levelsAvg.push(sumValues / n);
    }
    
    return levelsAvg;
};