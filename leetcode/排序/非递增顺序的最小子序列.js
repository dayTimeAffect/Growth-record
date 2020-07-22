/*
* https://leetcode-cn.com/problems/minimum-subsequence-in-non-increasing-order/
* */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    nums.sort((a, b) => b - a)
    let sum = 0,temSum = 0,res = []
    for (let i = 0; i < nums.length; i ++) {
        sum += nums[i]
    }
    while (temSum <= sum) {
        let tem = nums.shift()
        sum -= tem
        temSum += tem
        res.push(tem)
    }
    return res
};