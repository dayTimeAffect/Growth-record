/*
* 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
* */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let result = 0
    let index = 0
    let tem = 0
    while (index < nums.length){
        for (let i = index; i < nums.length; i ++) {
            tem += nums[i]
            if (tem === k) {
                result ++
            }
        }
        tem = 0
        index ++
    }
    return result
};