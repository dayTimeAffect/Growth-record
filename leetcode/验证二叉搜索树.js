/*
* 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
* 假设一个二叉搜索树具有如下特征：
* 节点的左子树只包含小于当前节点的数。
* 节点的右子树只包含大于当前节点的数。
* 所有左子树和右子树自身必须也是二叉搜索树。
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    /*
    * 方法一：一个有效的二叉搜索树，每一个值都有个范围最大不能超过多少最小不能低于多少
    * 比如：[3,1,5,0,2,4,6,null,null,null,3]
    *               3
    *           1       5
    *        0     2  4    6 ...
    * 1的左子树最大不能超过1，最小不能低于-Infinity，而1的右子树，最大不能超过3，最小不能低于1
    * 5的左子树最大不能超过5，最小不能低于3，而5的右子树最大不能超过Infinity，最小不能低于5
    *
    * 所以递归，每次更新最大、最小值便可
    * */
    let judge = function(root,maxVal,minVal){
        if (root === null) return true
        return (root.val < maxVal && root.val > minVal) && judge(root.left,root.val,minVal) && judge(root.right,maxVal,root.val)
    }
    return judge(root,Infinity,-Infinity)
};
//方法二：中序遍历为升序即可