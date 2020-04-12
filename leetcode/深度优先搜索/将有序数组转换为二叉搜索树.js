/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    /*
    * 思路和求最小高度树一样
    * 高度应该为 数组长度 / 2，所以根节点取中间得那个数
    * 循环递归就行了
    * 当数组为空的时候停止
    * */
    if (nums.length === 0){
        return null
    } else{
        let index = Math.floor(nums.length / 2)
        let node = {
            val:nums[index]
        }
        let leftArr = nums.splice(0,index)
        let rightArr = nums.splice(1)
        node.left = sortedArrayToBST(leftArr)
        node.right = sortedArrayToBST(rightArr)
        return node
    }
};