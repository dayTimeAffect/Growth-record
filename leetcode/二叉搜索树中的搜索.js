/*
* 给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。
* */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    //递归深度优先搜索
    if (root === null) return null
    if (root.val === val) {
        return root
    } else{
        let left = searchBST(root.left,val)
        if (left !== null) return left
        let right = searchBST(root.right,val)
        if (right !== null) return right
    }
    return null
};