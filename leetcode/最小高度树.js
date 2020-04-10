/*
* 给定一个有序整数数组，元素各不相同且按升序排列，编写一个算法，创建一棵高度最小的二叉搜索树。
* */
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
    * 思路：由于需要高度最小，那么左右两边高度差最大不超过1，也就是高度应该为 数组长度 / 2，所以根节点取中间得那个数
    * 这样 就将数组分为两边，循环递归上面的思路
    * */
    let index = Math.floor(nums.length / 2)
    let create = function (nums,index) {
        if(nums.length === 0){
            return null
        }
        let node = {
            val:nums[index],
        }
        let leftArr = nums.splice(0,index)
        let rightArr = nums.splice(1)
        node.left = create(leftArr,Math.floor(index / 2))
        node.right = create(rightArr,Math.floor(rightArr.length / 2))
        return node
    }
    let node = create(nums,index)
    return node
};
console.log(sortedArrayToBST([]));