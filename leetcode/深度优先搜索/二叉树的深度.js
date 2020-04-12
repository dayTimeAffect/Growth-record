/*
* 输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
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
    * 思路：
    * 高度 = 1(根节点) +  Math.max(左子树高度，右子树高度)
    * */

    let len = 1
    if (root === null){
        return 0
    } else{
        len += Math.max(maxDepth(root.left),maxDepth(root.right))
    }
    return len

};
console.log(maxDepth(

));