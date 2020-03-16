/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let res = 0
    depth(root)
    return res
    function depth(node) {
        if (node == null) return 0
        let left = depth(node.left)
        let right = depth(node.right)
        res = Math.max(res,left+right)
        return  Math.max(left,right) + 1
    }

};

