/*
* 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let res = []
    let recode = -1
    let dps = function (root,index) {
        if (root !== null) {
            if (index > recode) {
                recode = index
                res.push(root.val)
            }
            dps(root.right,index + 1)
            dps(root.left,index + 1)
        }
    }
    dps(root,0)
    return res
};