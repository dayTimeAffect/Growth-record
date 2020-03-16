/*
* 给定一个无序的整数数组，找到其中最长上升子序列的长度。
* */
/*
* 输入: [10,9,2,5,3,7,101,18]
输出: 4
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    /*
    * 动态规划
    * */
    if (nums.length <= 1) return nums.length
    let dp = new Array(nums.length).fill(1)
    let max = 1
    for (let i = 0;i<nums.length ;i++){
        for (let j = i;j >= 0;j--) {
            if (nums[j] < nums[i]){
                if (dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1
                    dp[i] > max ? max = dp[i] : ''
                }
            }
        }
    }
    return max
};
console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]));