/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    let result;
    const dfs = (root) => {
        if(!root) return root;
        if(root.val === target.val) return result = root;
        
        dfs(root.left);
        dfs(root.right);
    }
    dfs(cloned);
    
    return result;
};
