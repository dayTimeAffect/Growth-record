/*
* 给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。
*
* */

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
var maxDepth = function(root) {
    /*
    * 思路：这也就是求二叉树的高度
    * 高度 = 1(根节点) + Math.max(左子树高度，右子树高度)
    * 有一点DFS的感觉
    * */
    let len = 1
    if (root === null){
        return 0
    } else{
        len += Math.max(maxDepth(root.left),maxDepth(root.right))
    }
    return len
};